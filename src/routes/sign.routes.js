import { Router } from "express";
import { validateSignUp,verifyUser,validateLogin } from "../middlewares/sign.middlewares.js";
import {postUser, postLogin} from "../controllers/sign.controllers.js"

const route = Router()


route.post("/signin",validateLogin,postLogin)

route.post("/signup",validateSignUp,verifyUser, postUser)

export default route