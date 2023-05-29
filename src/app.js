import  Express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./dbs/connectDb.js";
import signRoute from "./routes/sign.routes.js"
import postsRoute from "./routes/posts.routes.js"
import usersRoute from "./routes/users.routes.js"
import followsRoute from "./routes/follows.routes.js"
import meRoute from "./routes/me.routes.js"
import likeRoute from "./routes/likes.router.js"


dotenv.config()

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(signRoute)
app.use(postsRoute)
app.use(usersRoute)
app.use(followsRoute)
app.use(meRoute)
app.use(likeRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`server running in port ${PORT}`))