import { Router } from "express";
import { authenticateToken, validateEdit } from "../middlewares/me.middleware.js";
import {getUsers, getUserById,getUserPostById} from "../controllers/users.controllers.js"

const route = Router()

route.get("/users",authenticateToken,getUsers)

route.get("/user/:id",authenticateToken,getUserById)

route.get("/user/posts/:id",authenticateToken,getUserPostById)

export default route