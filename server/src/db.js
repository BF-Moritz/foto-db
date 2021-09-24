const monk = require('monk');

const db = monk('localhost/photo-db');

const schuelerDB = db.get('schueler');
const photosDB = db.get('photos');

module.exports = {
	schuelerDB,
	photosDB
};
