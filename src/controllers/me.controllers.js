import {getUserByIdRepository, getUserByUsernameOrEmail, editMyUserRepository,deleteMyUserRepository} from "../repository/users.repository.js"
import {getPostsByUserId} from "../repository/posts.repository.js"


export async function getUser(req,res){

    try{
        const user = await getUserByUsernameOrEmail(req.userName)

        return res.status(200).send(user.rows[0])

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function getMyUser(req,res){
    try{

        const user = await getUserByIdRepository(req.userId,req.userId)
        if(user.rowCount === 0) return res.status(404).send("user not Found!")
        return res.send(user.rows[0])

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function editMyUser(req,res){

    try{

        const {name,photo,biography} = req.body
        await editMyUserRepository(name,photo,biography,req.userId)
        return res.sendStatus(200)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function deleteMyUser(req,res){

    try {
        const result = await deleteMyUserRepository(req.userId)
        
        return res.sendStatus(200)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}

export async function getMyPosts(req,res){

    try{

        const page = ((req.query.page - 1)*15 || null)


        const posts = await getPostsByUserId(req.userId,page,req.userId)

        
        return res.send(posts.rows)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.detail)
    }
}