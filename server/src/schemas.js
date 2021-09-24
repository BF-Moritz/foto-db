const joi = require('joi');

const schuelerSchema = joi.object({
	nachname: joi.string().trim().required(),
	vorname: joi.string().trim().required(),
	klasse: joi.string().trim().required(),

	einverstaendnis1: joi.boolean().required(),
	einverstaendnis2: joi.boolean().required(),
	einverstaendnis3: joi.boolean().required(),
	einverstaendnis4: joi.boolean().required()
});

const photoSchema = joi.object({
	data: joi.string().required(),
	fotograph: joi.string().required(),
	schueler: joi.array().items(joi.string()).required(),
	erstellungsdatum: joi.date().required(),
	loeschungsdatum: joi.date()
});

module.exports = { schuelerSchema, photoSchema };
