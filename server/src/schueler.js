const { Router } = require('express');
const { schuelerDB, photosDB } = require('./db.js');
const { schuelerSchema } = require('./schemas.js');
const schuelerRouter = new Router();

// get "/schueler/" -> alle schüler
schuelerRouter.get('/', async (req, res) => {
	const schueler = await schuelerDB.find({});
	res.json(schueler);
});
// get "/schueler/:id" -> ein schüler
schuelerRouter.get('/:id', async (req, res) => {
	const schuelerID = req.params.id;
	try {
		const schueler = await schuelerDB.findOne({ _id: schuelerID });
		res.json(schueler);
	} catch (error) {
		res.sendStatus(500);
	}
});
// get "/schueler/:id/photos" -> alle photos
schuelerRouter.get('/:id/photos', async (req, res) => {
	const schuelerID = req.params.id;
	const photos = await photosDB.find({ schueler: schuelerID });
	res.json(photos);
});
// put "/schueler/" -> schüler
schuelerRouter.put('/', async (req, res) => {
	const schueler = req.body;
	const validSchueler = schuelerSchema.validate(schueler);
	if (validSchueler.error) {
		res.json(validSchueler.error);
		return;
	}

	const insertedSchueler = await schuelerDB.insert(validSchueler.value);
	res.json(insertedSchueler);
});
// update "/schueler/:id" -> neuen infos
schuelerRouter.post('/:id', async (req, res) => {
	const schuelerID = req.params.id;
	const schueler = req.body;
	const validSchueler = schuelerSchema.validate(schueler);
	if (validSchueler.error) {
		res.json(validSchueler.error);
		return;
	}

	await schuelerDB.update({ _id: schuelerID }, { $set: validSchueler.value });
	const insertedSchueler = await schuelerDB.findOne({ _id: schuelerID });
	res.json(insertedSchueler);
});
// delete "/schueler/:id" -> status
schuelerRouter.delete('/:id', async (req, res) => {
	const schuelerID = req.params.id;
	await schuelerDB.findOneAndDelete({ _id: schuelerID });
	res.sendStatus(200);
});

module.exports = schuelerRouter;
