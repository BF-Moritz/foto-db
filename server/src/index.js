const express = require('express');
const schuelerRouter = require('./schueler.js');
const photosRouter = require('./photos.js');

const app = express();

app.get('/', (req, res) => {
	res.json({
		message: 'Hi'
	});
});

app.use('/schueler', schuelerRouter);
app.use('/photos', photosRouter);

app.listen(12345, () => {
	console.log('API hört auf Port 12345');
});
