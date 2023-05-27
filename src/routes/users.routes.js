import { Router } from "express";
import { authenticateToken } from "../middlewares/users.middleware.js";
import {getUser} from "../controllers/users.controllers.js"

const route = Router()

route.get("/",authenticateToken,getUser)

export default route