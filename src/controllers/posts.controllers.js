import {insertPostRepository, getPostByIdRepository} from "../repository/posts.repository.js"

export async function insertPost(req,res){


    try{

         insertPostRepository({...req.body,userid: req.userId})
        
        return res.sendStatus(201)

    } catch(err){
        
        return res.status(500).send(err.detail)
    }
}

export async function getPostById(req,res){

    try {
        const id = parseInt(req.params.id)

        if(!id) return res.status(400).send("invalid id!")

        const post = await getPostByIdRepository(id,req.userId)

        if(post.rowCount === 0) return res.sendStatus(404)

        return res.send(post.rows[0])
    } catch(err){
        console.log(err)
        const error = err
        return res.status(500).send(error)
    }
}