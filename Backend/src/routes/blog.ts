import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {Hono} from "hono";
import {verify} from "hono/jwt"
import {createBlogInput, UpdateBlogInput} from "@neha_kanabar/medium-commom"

export const blogRouter = new Hono<{
     Bindings:{
        DATABASE_URL : string;
        JWT_SECRET : string;
     },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use("/*",async (c,next)=>{
    //extract the user id
    //pass it down to the route handler
    const authHeader = c.req.header("Authorization") || "";
    try{
        const user =await verify(authHeader, c.env.JWT_SECRET);
        if(user)
        {
            //@ts-ignore
            c.set("userId", user.id);
            await next();
        }
        else{
            c.status(403);
            return c.json({
                message: "you are not logged in"
            })
        }
    }
    catch(e)
    {
        c.status(403);
        return c.json({
            message: "you are not logged in!"
        })
    }
    
})

blogRouter.post('/',async (c)=>{
    const body = await c.req.json();
    // const {success} = createBlogInput.safeParse(body);
    // if(!success){
    //     c.status(411);
    //     return c.json({
    //         message: "input not correct"
    //     })
    // }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // const blog = await prisma.blog.create({
    //     data:{
    //         title:body.title,
    //         content: body.content,
    //         authorId : Number(authorId)
    //     }
    // })

    const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      category: body.category,     // <-- New field
      readTime: body.readTime,     // <-- New field
      authorId: Number(authorId),
    },
  });
  
    return c.json({
        id: blog.id
    })
  })

blogRouter.put('/',async (c)=>{
    const body = await c.req.json();
    const {success} = UpdateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "input not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    })
  })

//todo : pagination
blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
        select: {
            content:true,
            title:true,
            id:true,
            category:true,
            readTime:true,
            createdAt:true,
            author: {
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blogs
    })
  })
  
blogRouter.get('/:id',async (c)=>{
    const id  = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog  = await prisma.blog.findFirst({
            where:{
                id:Number(id)
            },
            select:{
                id:true,
                title:true,
                content:true,
                category:true,
                readTime:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

        return c.json({
            blog
        })
    } catch(e) {
        c.status(411);
        return c.json({
            message:"Error whole fetching blog post"
        });
    }
  })
  

  