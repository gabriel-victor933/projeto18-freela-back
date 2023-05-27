import {getUserByUsernameOrEmail, getUsersRepository} from "../repository/users.repository.js"

export async function getUser(req,res){

    try{
        const user = await getUserByUsernameOrEmail(req.userName)

        return res.status(200).send(user.rows[0])

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function getUsers(req,res){

    try {
        const search = (req.query.search || null)
        const page = ((req.query.page - 1)*15 || null)
        
        const users = await getUsersRepository(search,page)
        
        return res.status(200).send(users.rows)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}