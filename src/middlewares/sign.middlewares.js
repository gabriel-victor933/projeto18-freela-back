import { signUp } from "../schemas/signUp.schema.js"
import { db } from "../dbs/connectDb.js"

export function validateSignUp(req,res,next){

    const {error} = signUp.validate(req.body,{abortEarly: false})

    if(error) {
        const message = error.details.map((detail)=> detail.message)
        return res.status(422).send(message)
    }

    next()
}


export async function verifyUser(req,res,next){

    const user = await db.query("SELECT users.email,users.username FROM users WHERE users.email = $1 OR users.username = $2",[req.body.email,req.body.username])
    
    if(user.rowCount !== 0){
        return user.rows[0].email === req.body.email ? res.status(422).send("email já cadastrado") : res.status(422).send("username em uso")
    }

    next()
}