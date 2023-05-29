import { Router } from "express";
import { authenticateToken } from "../middlewares/me.middleware.js";
import { validatePost } from "../middlewares/posts.middleware.js";
import { insertPost, getPostById  } from "../controllers/posts.controllers.js";
import {verifyPost} from "../middlewares/posts.middleware.js"
import {validateComment} from "../middlewares/comment.middleware.js"
import {postComment,getComments} from "../controllers/comment.controllers.js"

const route = Router()

route.post("/post",authenticateToken,validatePost,insertPost)

route.get("/post/:id",authenticateToken,getPostById)

route.post("/post/:id/comments",authenticateToken,verifyPost,validateComment, postComment)

route.get("/post/:id/comments",authenticateToken,verifyPost,getComments)


export default route