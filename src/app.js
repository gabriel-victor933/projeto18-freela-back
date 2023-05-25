import  Express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./dbs/connectDb.js";
import route from "./routes/sign.routes.js"

dotenv.config()

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(route)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`server running in port ${PORT}`))