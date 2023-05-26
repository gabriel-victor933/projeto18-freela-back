import { signUp } from "../schemas/signUp.schema.js"
import { signIn } from "../schemas/signIn.schema.js"
import { db } from "../dbs/connectDb.js"

export function validateSignUp(req,res,next){

    const {error} = signUp.validate(req.body,{abortEarly: false})

    if(error) {
        const message = error.details.map((detail)=> detail.message)
        return res.status(422).send({errorType: "cadastro", message: message})
    }

    next()
}


export async function verifyUser(req,res,next){

    const user = await db.query("SELECT users.email,users.username FROM users WHERE users.email = $1 OR users.username = $2",[req.body.email,req.body.username])
    
    if(user.rowCount !== 0){
        const emailError = {errorType: "email", message: "email já cadastrado"}
        const userNameError = {errorType: "username", message: "username em uso"}

        return user.rows[0].email === req.body.email ? res.status(422).send(emailError) : res.status(422).send(userNameError)
    }

    next()
}

export function validateLogin(req,res,next){

    const {error } = signIn.validate(req.body,{abortEarly: false})

    if(error) {
        const message = error.details.map((detail)=> detail.message)
        return res.status(422).send({errorType: "cadastro", message: message})
    }

    next()
}