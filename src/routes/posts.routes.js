import { Router } from "express";
import { authenticateToken } from "../middlewares/me.middleware.js";
import { validatePost } from "../middlewares/posts.middleware.js";
import { insertPost } from "../controllers/posts.controllers.js";

const route = Router()

route.post("/post",authenticateToken,validatePost,insertPost)

route.get("/post/:id",authenticateToken,getPostById)

export default route