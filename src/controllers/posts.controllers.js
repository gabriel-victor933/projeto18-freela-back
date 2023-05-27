import {insertPostRepository} from "../repository/posts.repository.js"

export async function insertPost(req,res){


    try{

         insertPostRepository({...req.body,userid: req.userId})
        
        return res.sendStatus(201)

    } catch(err){
        
        return res.status(500).send(err.detail)
    }
}