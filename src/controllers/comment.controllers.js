import { postCommentReposiroty, getCommentReposiroty } from "../repository/comment.repository.js"

export async function postComment(req,res){

    try {

        await postCommentReposiroty(req.userId,req.params.id,req.body.comment)

        return res.sendStatus(201)

    } catch(err){
        console.log(err)
        return res.status(500)
    }
}


export async function getComments(req,res){

    try {
        const page = ((req.query.page - 1)*15 || null)
        const comments = await getCommentReposiroty(req.params.id,page)

        return res.send(comments.rows)

    } catch(err){
        console.log(err)
        return res.status(500)
    }
}