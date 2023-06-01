import {getUserByIdRepository, getUsersRepository} from "../repository/users.repository.js"
import {getPostsByUserId} from "../repository/posts.repository.js"

export async function getUsers(req,res){

    try {
        const search = (req.query.search || null)
        let page = 0
        if(req.query.page){

            if(!parseInt(req.query.page)) return res.status(400).send("invalid URL request")

            page = (req.query.page - 1)*15
            
        } else {
            page = null
        }
        

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

export async function getUserPostById(req,res){

    try {

        const id = parseInt(req.params.id)
        let page = 0
        if(req.query.page){

            if(!parseInt(req.query.page)) return res.status(400).send("invalid URL request")

            page = (req.query.page - 1)*15
            
        } else {
            page = null
        }

        if(!id) return res.status(400).send("invalid id")

        const posts = await getPostsByUserId(id,page,req.userId)

        return res.send(posts.rows)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

