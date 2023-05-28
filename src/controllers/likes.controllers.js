import {postLikeRepository, deleteLikeRepository} from "../repository/likes.repository.js"

export async function postLike(req,res){
    try {

        const postId = parseInt(req.params.id)

        if(!postId) return res.status(400).send("invalid Id")

        const data = await postLikeRepository(postId,req.userId)

        return res.send("ok")

    } catch(err) {
        console.log(err)
        const error = err.message
        return res.status(500).send(error)
    } 
}

export async function deleteLike(req,res){
    try {

        if(!parseInt(req.params.id)) return res.status(400).send("invalid id!")

        const result = await deleteLikeRepository(req.params.id,req.userId)
        if(result.rowCount === 0) return res.status(400).send("não foi possivel completar a operação")
        
        return res.sendStatus(200)

    } catch(err) {
        console.log(err)
        return res.status(500).send(err?.details)
    } 
}