import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import {cors} from 'hono/cors';
import { contactRouter } from './routes/Contact';
const app = new Hono<{
  Bindings : {
    DATABASE_URL :string;
    JWT_SECRET : string;
  }
}>()
app.use('/*',cors());
app.route("api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);
app.route("api/v1/contact",contactRouter);




export default app




// postgres://avnadmin:AVNS_fMW22bvCnpXoLaQXeFw@pg-1213c295-aayushaghera-e9d6.d.aivencloud.com:19464/defaultdb?sslmode=require

// prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDFKV0dHR0hGOTgzMjVGRDA5SFpDME1CN1EiLCJ0ZW5hbnRfaWQiOiIxZGMyZDllZTExODEyMGViNDQzODdkNjk5OGZhZjQyNDQ1MGFhMTNhMTdhOWIyMjY3MzU3ZTE4ODA0ODI3MjAwIiwiaW50ZXJuYWxfc2VjcmV0IjoiODU5ZDM4NjMtOTc0YS00MzlmLTlmZmEtOWU2MjI1NjdjZWMzIn0.q8YRE0Mw_6YEaUa2W20uFigLHQ2CEPHwFmE-tKZ29UY