import Joi from "joi";

export const signUp = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().max(50).email().required(),
    username: Joi.string().max(50).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    biography: Joi.string().empty(""),
    photo: Joi.string().pattern(/^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/).empty("")
})