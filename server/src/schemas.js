const joi = require('joi');

const schuelerSchema = joi.object({
	nachname: joi.string().trim().required(),
	vorname: joi.string().trim().required(),
	klasse: joi.string().trim().required(),

	einverstaendnis1: joi.boolean(),
	einverstaendnis2: joi.boolean(),
	einverstaendnis3: joi.boolean(),
	einverstaendnis4: joi.boolean()
});

const photoSchema = joi.object({
	data: joi.string().required(),
	fotograph: joi.string().required(),
	schueler: joi.array().items(joi.string()).required(),
	erstellungsdatum: joi.date().required(),
	loeschungsdatum: joi.date()
});

module.exports = { schuelerSchema, photoSchema };
