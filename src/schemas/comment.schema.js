import Joi from "joi";

export const commentSchema = Joi.object({
    comment: Joi.string().max(200).required()
})