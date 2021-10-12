const express = require('express');
const cors = require('cors');

const schuelerRouter = require('./schueler.js');
const photosRouter = require('./photos.js');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json({
		message: 'Hi'
	});
});

app.use(express.json());

app.use('/schueler', schuelerRouter);
app.use('/photos', photosRouter);

app.listen(12345, () => {
	console.log('API hört auf Port 12345');
});
