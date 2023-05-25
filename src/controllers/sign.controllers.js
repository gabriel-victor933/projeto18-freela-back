import { postUserRepository, getUserByUsernameOrEmail } from "../repository/sign.repository.js"
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

export async function postLogin(req,res){
    try {
        const user = await getUserByUsernameOrEmail(req.body.locator)

        if(user.rowCount === 0 ) return res.status(404).send("usuario não encontrado")

        if(!bcrypt.compareSync(req.body.password, user.rows[0].password)) return res.status(401).send("email/senha inválido")
       
        //gerar e retornar token de autenticação
        return res.send("OK")
    } catch(err){
        return res.status(500).send(err)
    }
}