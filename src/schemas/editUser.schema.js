import Joi from "joi";

export const edit = Joi.object({
    name: Joi.string().max(50).required(),
    biography: Joi.string().empty(""),
    photo: Joi.string().pattern(/^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/).empty("")
})