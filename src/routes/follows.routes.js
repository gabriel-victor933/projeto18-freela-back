import { Router } from "express";
import { authenticateToken } from "../middlewares/me.middleware.js";
import {postFollow, deleteFollow} from "../controllers/follows.controllers.js"

const route = Router()

route.post("/follow/:id",authenticateToken,postFollow)
route.delete("/follow/:id",authenticateToken,deleteFollow)

export default route