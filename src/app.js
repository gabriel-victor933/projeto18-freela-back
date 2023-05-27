import  Express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./dbs/connectDb.js";
import signRoute from "./routes/sign.routes.js"
import postsRoute from "./routes/posts.routes.js"

dotenv.config()

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(signRoute)
app.use(postsRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`server running in port ${PORT}`))