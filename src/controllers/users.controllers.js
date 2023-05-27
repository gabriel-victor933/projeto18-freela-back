import {getUserByUsernameOrEmail} from "../repository/users.repository.js"

export async function getUser(req,res){

    try{
        const user = await getUserByUsernameOrEmail(req.userName)

        const {name, photo} = user.rows[0]
        return res.status(200).send({name, photo})

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}