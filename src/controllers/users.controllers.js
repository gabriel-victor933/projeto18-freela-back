import {getUserByIdRepository, getUserByUsernameOrEmail, getUsersRepository} from "../repository/users.repository.js"

export async function getUsers(req,res){

    try {
        const search = (req.query.search || null)
        const page = ((req.query.page - 1)*15 || null)
        

        const users = await getUsersRepository(search,page,req.userName)
        
        return res.status(200).send(users.rows)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function getUserById(req,res){

    try{

        if(!parseInt(req.params.id)) return res.status(400).send("invalid id")


        const user = await getUserByIdRepository(parseInt(req.params.id),req.userId)

        if(user.rowCount === 0) return res.status(404).send("user not Found!")

        return res.send(user.rows[0])

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

