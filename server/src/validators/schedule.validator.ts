import Joi from 'joi';

export const scheduleValidator = {
    createSchedule: Joi.object({
        numberOfTrain: Joi.number().min(1).required().messages({
            'number.empty': 'numberOfTrain cannot be an empty field',
            'number.base': 'numberOfTrain must be a number',
            'number.min': 'numberOfTrain  must be at bigger than one',

        }),
        startingStation: Joi.string().min(3).required().messages({
            'string.base': 'startingStation must be a string',
            'string.empty': 'startingStation is not allowed to be empty',
            'string.min': 'startingStation length must be at least 3 characters long',
        }),
        arrivalTime: Joi.string().regex(/^[0-2][0-9]:[0-5][0-9]$/).required().messages({
            'string.pattern.base': 'arrivalTime must be in period 00:00 - 23:59',
            'string.empty': 'arrivalTime is not allowed to be empty',
        }),
        stopping: Joi.number().required().messages({
            'number.empty': 'stopping cannot be an empty field',
            'number.base': 'stopping must be a number',
        }),
        departureTime: Joi.string().regex(/^[0-2][0-9]:[0-5][0-9]$/).required().messages({
            'string.pattern.base': 'departureTime must be in period 00:00 - 23:59',
            'string.empty': 'departureTime is not allowed to be empty',
        }),
        terminalStation: Joi.string().min(3).required().messages({
            'string.base': 'terminalStation must be a string',
            'string.empty': 'terminalStation is not allowed to be empty',
            'string.min': 'terminalStation length must be at least 3 characters long',
        }),
    }),
};
