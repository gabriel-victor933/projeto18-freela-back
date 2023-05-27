import { postSchema } from "../schemas/posts.schema.js"

export function validatePost(req,res,next){

    const {error} = postSchema.validate(req.body)

    if(error){
        
        const message = error.details.map((d)=> d.message)
        return res.status(422).send({errorType: "post", message: message})

    }
    next()
}