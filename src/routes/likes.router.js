import { Router } from "express";
import { authenticateToken } from "../middlewares/me.middleware.js";
import {postLike,deleteLike} from "../controllers/likes.controllers.js"

const route = Router()

route.post("/like/:id",authenticateToken,postLike)
route.delete("/like/:id",authenticateToken,deleteLike)

export default route