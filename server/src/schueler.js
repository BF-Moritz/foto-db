const { Router } = require('express');

const schuelerRouter = new Router();

// get "/schueler/" -> alle schüler
schuelerRouter.get('/', (req, res) => {
	res.json({});
});
// get "/schueler/:id" -> ein schüler
schuelerRouter.get('/:id', (req, res) => {
	res.json({});
});
// get "/schueler/:id/photos" -> alle photos
schuelerRouter.get('/:id/photos', (req, res) => {
	res.json({});
});
// put "/schueler/" -> schüler
schuelerRouter.put('/', (req, res) => {
	res.json({});
});
// update "/schueler/:id" -> neuen infos
schuelerRouter.post('/:id', (req, res) => {
	console.log(req.params.id);
	res.json({});
});
// delete "/schueler/:id" -> status
schuelerRouter.delete('/:id', (req, res) => {
	res.sendStatus(200);
});

module.exports = schuelerRouter;
