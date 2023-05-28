import { Router } from "express";
import { authenticateToken } from "../middlewares/users.middleware.js";
import {getUser,getUsers, getUserById, getMyUser} from "../controllers/users.controllers.js"

const route = Router()

route.get("/",authenticateToken,getUser)

route.get("/users",authenticateToken,getUsers)

route.get("/user/:id",authenticateToken,getUserById)

route.get("/me",authenticateToken,getMyUser)


export default route