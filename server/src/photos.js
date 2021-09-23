const { Router } = require('express');

const photosRouter = new Router();

// get "/photos/" -> alle photos
photosRouter.get('/', (req, res) => {
	res.json({});
});
// get "/photos/:id" -> ein photo
photosRouter.get('/:id', (req, res) => {
	res.json({});
});
// put "/photos/" -> id
photosRouter.put('/', (req, res) => {
	res.json({});
});
// update "/photos/:id" -> neuen infos
photosRouter.post('/:id', (req, res) => {
	res.json({});
});
// delete "/photos/:id" -> status
photosRouter.delete('/:id', (req, res) => {
	res.sendStatus(200);
});

module.exports = photosRouter;
