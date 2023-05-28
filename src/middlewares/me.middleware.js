import jwt from "jsonwebtoken"
import {edit} from "../schemas/editUser.schema.js"

export async function authenticateToken(req,res,next){

    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,data)=>{
        if(err) return res.sendStatus(403)
        
        req.userId = data.id
        req.userName = data.username
        next()
    })

}

export async function validateEdit(req,res,next){

    const { error } = edit.validate(req.body,{abortEarly: false})

    if(error) {
        const message = error.details.map((detail)=> detail.message)
        return res.status(422).send({errorType: "edit", message: message})
    }

    next()
}