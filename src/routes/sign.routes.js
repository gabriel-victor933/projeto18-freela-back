import { Router } from "express";
import { validateSignUp,verifyUser } from "../middlewares/sign.middlewares.js";
import {postUser} from "../controllers/sign.controllers.js"

const route = Router()


route.post("/signin",(req,res)=> {
    console.log("teste")
    res.send("ok")
})

route.post("/signup",validateSignUp,verifyUser, postUser)

export default route