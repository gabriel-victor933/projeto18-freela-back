import { Router } from "express";
import { authenticateToken, validateEdit } from "../middlewares/users.middleware.js";
import {getUser,getUsers, getUserById, getMyUser,editMyUser,deleteUser} from "../controllers/users.controllers.js"

const route = Router()

route.get("/",authenticateToken,getUser)

route.get("/users",authenticateToken,getUsers)

route.get("/user/:id",authenticateToken,getUserById)

route.get("/me",authenticateToken,getMyUser)

route.patch("/me",authenticateToken,validateEdit,editMyUser)

route.delete("/me",authenticateToken,deleteUser)


export default route