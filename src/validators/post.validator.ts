import Joi from "joi";
export const postValidator =
    Joi
        .object(
            {
                body:Joi.string().pattern(/^[a-zA-Z\s]+$/).required().messages({'string.pattern.base': 'Текст може містити лише літери та пробіли',
                    'string.empty': 'Текст не може бути порожнім',
                    'any.required': 'Поле є обов"язковим'}),
                title:Joi.string().pattern(/^[a-zA-Z\s]+$/).required().messages({'string.pattern.base': 'Текст може містити лише літери та пробіли',
                    'string.empty': 'Текст не може бути порожнім',
                    'any.required': 'Поле є обов"язковим'}),
                userId:Joi.number().min(1).max(100).required().messages( {
                    'number.required': 'userId cannot be empty',
                    'number.min': 'userId cannot be empty lt1',
                    'number.max': 'userId cannot be empty gt 10',
                },)
            })

