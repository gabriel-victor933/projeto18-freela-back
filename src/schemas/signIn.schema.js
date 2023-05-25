import Joi from "joi";

export const signIn = Joi.object({
    locator: Joi.string().max(50).required(),
    password: Joi.string().required(),
})