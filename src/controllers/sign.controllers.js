import { postUserRepository } from "../repository/sign.repository.js"
import bcrypt from "bcrypt"

export async function postUser(req,res){

    try {
        const encryptPassword = bcrypt.hashSync(req.body.password,10)
        
        const response = await postUserRepository({...req.body,password: encryptPassword})

        if(response.rowCount != 1) return res.status(501).send("Não foi possivel adicionar ao servidor")

        return res.sendStatus(201)

    } catch(err){
        return res.sendStatus(500)
    }

    
}