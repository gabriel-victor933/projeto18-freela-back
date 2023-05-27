import { Router } from "express";
import { authenticateToken } from "../middlewares/users.middleware.js";
import {getUser,getUsers, getUserById} from "../controllers/users.controllers.js"

const route = Router()

route.get("/",authenticateToken,getUser)

route.get("/users",authenticateToken,getUsers)

route.get("/user/:id",authenticateToken,getUserById)


export default route