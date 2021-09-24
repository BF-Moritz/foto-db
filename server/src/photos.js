const { Router } = require('express');
const { photosDB } = require('./db.js');
const { photoSchema } = require('./schemas.js');
const photosRouter = new Router();

// get "/photos/" -> alle photos
photosRouter.get('/', async (req, res) => {
	const photos = await photosDB.find({});
	res.json(photos);
});
// get "/photos/:id" -> ein photo
photosRouter.get('/:id', async (req, res) => {
	const photosID = req.params.id;
	try {
		const photos = await photosDB.findOne({ _id: photosID });
		res.json(photos);
	} catch (error) {
		res.sendStatus(500);
	}
});

// put "/photos/" -> id
photosRouter.put('/', async (req, res) => {
	const photos = req.body;
	const validPhotos = photoSchema.validate(photos);
	if (validPhotos.error) {
		res.json(validPhotos.error);
		return;
	}

	const insertedPhoto = await photosDB.insert(validPhotos.value);
	res.json(insertedPhoto);
});
// update "/photos/:id" -> neuen infos
photosRouter.post('/:id', async (req, res) => {
	const photosID = req.params.id;
	const photo = req.body;
	const validPhotos = photoSchema.validate(photo);
	if (validPhotos.error) {
		res.json(validPhotos.error);
		return;
	}

	await photosDB.update({ _id: photosID }, { $set: validPhotos.value });
	const insertedPhoto = await photosDB.findOne({ _id: photosID });
	res.json(insertedPhoto);
});

// delete "/photos/:id" -> status
photosRouter.delete('/:id', async (req, res) => {
	const photosID = req.params.id;
	await photosDB.findOneAndDelete({ _id: photosID });
	res.sendStatus(200);
});

module.exports = photosRouter;
