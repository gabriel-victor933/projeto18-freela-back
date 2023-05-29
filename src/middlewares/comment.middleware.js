import { commentSchema } from "../schemas/comment.schema.js";

export function validateComment(req,res,next){

    const {error} = commentSchema.validate(req.body)
    if(error){
        
        const message = error.details.map((d)=> d.message)
        return res.status(422).send({errorType: "comment", message: message})

    }
    next()

}