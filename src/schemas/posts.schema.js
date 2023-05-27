import Joi from "joi";

export const postSchema = Joi.object({
    title: Joi.string().max(50).required(),
    description: Joi.string(),
    photo: Joi.string().pattern(/^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/).empty("").required()
})