import Joi from "joi";

export const signIn = Joi.object({
    email: Joi.try(Joi.string().email(),Joi.string()),
    password: Joi.string().required(),
})