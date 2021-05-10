const Joi = require('joi');

module.exports.login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});