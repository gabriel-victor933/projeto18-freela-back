import { Router } from "express";
import { authenticateToken, validateEdit } from "../middlewares/me.middleware.js";
import {getUser, getMyUser,editMyUser,deleteMyUser,getMyPosts, getMyFeedPost} from "../controllers/me.controllers.js"

const route = Router()

route.get("/",authenticateToken,getUser)

route.get("/me",authenticateToken,getMyUser)

route.get("/me/posts",authenticateToken,getMyPosts)

route.patch("/me",authenticateToken,validateEdit,editMyUser)

route.delete("/me",authenticateToken,deleteMyUser)

route.get("/me/feed",authenticateToken,getMyFeedPost)

export default route