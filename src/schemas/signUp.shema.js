import Joi from "joi";

export const signUp = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().max(50).email().required(),
    username: Joi.string().max(50).required(),
    password: Joi.string().required(),
    biography: Joi.string()
})