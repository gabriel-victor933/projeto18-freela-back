import { postUserRepository, getUserByUsernameOrEmail } from "../repository/sign.repository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function postUser(req,res){

    try {
        const encryptPassword = bcrypt.hashSync(req.body.password,10)
        
        const response = await postUserRepository({...req.body,password: encryptPassword})

        if(response.rowCount != 1) return res.status(501).send({errorType: "database", message: "Não foi possivel adicionar ao servidor"})

        return res.sendStatus(201)

    } catch(err){
        return res.status(500).send(err.detail)
    }    
}

export async function postLogin(req,res){
    try {
        const user = await getUserByUsernameOrEmail(req.body.locator)

        if(user.rowCount === 0 ) return res.status(404).send({errorType: "email", message: "usuario não encontrado"})

        if(!bcrypt.compareSync(req.body.password, user.rows[0].password)) return res.status(401).send({errorType: "password", message: "email/senha inválido"})
       

        const {username, createdat, id} = user.rows[0]

        const acessToken = jwt.sign({username, createdat, id},process.env.ACCESS_TOKEN_SECRET)
        
        return res.send({token: acessToken})
    } catch(err){
        return res.status(500).send(err.detail)
    }
}