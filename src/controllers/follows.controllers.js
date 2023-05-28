import {postFollowRepository} from "../repository/follows.repository.js"

export async function postFollow(req,res){
    try {

        if(!parseInt(req.params.id)) return res.status(400).send("invalid id!")

        const result = await postFollowRepository(req.userId,req.params.id)

        
        return res.send("ok")
    } catch(err){
        console.log(err)
        const error = err.message
        return res.status(500).send(error)
    }
}

export async function deleteFollow(req,res){
    try {

    } catch(err){
        console.error(err)
        return res.status(500).send(err)
    }
}