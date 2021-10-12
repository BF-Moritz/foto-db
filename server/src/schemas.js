const joi = require('joi');

const schuelerSchema = joi.object({
	nachname: joi.string().trim().required(),
	vorname: joi.string().trim().required(),
	klasse: joi.string().trim().required(),

	einverstaendnis1: joi.string().valid('Ja', 'Nein', 'Individuell'),
	einverstaendnis2: joi.string().valid('Ja', 'Nein', 'Individuell'),
	einverstaendnis3: joi.string().valid('Ja', 'Nein', 'Individuell'),
	einverstaendnis4: joi.string().valid('Ja', 'Nein', 'Individuell')
});

const photoSchema = joi.object({
	data: joi.string().required(),
	fotograph: joi.string().required(),
	schueler: joi.array().items(joi.string()).required(),
	erstellungsdatum: joi.date().required(),
	loeschungsdatum: joi.date()
});

module.exports = { schuelerSchema, photoSchema };
