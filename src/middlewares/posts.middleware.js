import { postSchema } from "../schemas/posts.schema.js"
import {getPostByIdRepository} from "../repository/posts.repository.js"

export function validatePost(req,res,next){

    const {error} = postSchema.validate(req.body)

    if(error){
        
        const message = error.details.map((d)=> d.message)
        return res.status(422).send({errorType: "post", message: message})

    }
    next()
}

export async function verifyPost(req,res,next){
    try{

        const id = parseInt(req.params.id)
        if(!id) return res.status(400).send("invalid id")
        
        const post = await getPostByIdRepository(id,req.userId)

        if(post.rowCount === 0) return res.status("404").send("post not found")

        next()

    } catch(err){
        const error = err
        return res.status(500).send(error)
    }
}
