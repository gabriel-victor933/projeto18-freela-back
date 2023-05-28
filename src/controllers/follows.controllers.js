import {postFollowRepository, deleteFollowRepository} from "../repository/follows.repository.js"

export async function postFollow(req,res){
    try {

        if(!parseInt(req.params.id)) return res.status(400).send("invalid id!")

        await postFollowRepository(req.userId,req.params.id)

        return res.sendStatus(200)
    } catch(err){
        console.log(err)
        const error = err.message
        return res.status(500).send(error)
    }
}

export async function deleteFollow(req,res){
    try {

        if(!parseInt(req.params.id)) return res.status(400).send("invalid id!")

        const result = await deleteFollowRepository(req.userId,req.params.id)
        if(result.rowCount === 0) return res.status(400).send("não foi possivel completar a operação")
        
        return res.sendStatus(200)
    } catch(err){
        console.error(err)
        return res.status(500).send(err)
    }
}