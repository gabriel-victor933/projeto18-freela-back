import { Router } from "express";
import { authenticateToken, validateEdit } from "../middlewares/me.middleware.js";
import {getUsers, getUserById} from "../controllers/users.controllers.js"

const route = Router()

route.get("/users",authenticateToken,getUsers)

route.get("/user/:id",authenticateToken,getUserById)

export default route