import {Hono} from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import { signupInput,signinInput } from "@neha_kanabar/medium-commom";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

  userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const { username, name } = body;

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    // If user doesn't exist, create new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          username: username,
          name: name,
        },
      });
    }

    // Generate JWT token
    const jwt = await sign(
      { id: user.id },
      c.env.JWT_SECRET
    );

    // Return token
    return c.json({ token: jwt });
  } catch (e) {
    console.error("Signup error:", e);
    c.status(500);
    return c.text('Internal Server Error');
  }
});

userRouter.post('/signin',async (c)=>{
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"input not correct"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          // password: body.password
        }
      })
      if(!user){
        c.status(403); //403 is generally used for unauthorized person
        return c.json({
          messgae: "incorrect creds"
        })
      }
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET)
  
      return c.text(jwt)
    }catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })
  