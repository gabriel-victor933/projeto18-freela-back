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
        let page = 0
        if(req.query.page){

            if(!parseInt(req.query.page)) return res.status(400).send("invalid URL request")

            page = (req.query.page - 1)*15
            
        } else {
            page = null
        }
        const comments = await getCommentReposiroty(req.params.id,page)

        return res.send(comments.rows)

    } catch(err){
        console.log(err)
        return res.status(500)
    }
}