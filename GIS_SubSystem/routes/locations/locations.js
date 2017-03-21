var debug       = require('debug')('broadsword-gis-api:routes:locations');
var express     = require('express');
var locations   = require('../../controllers/locations/locations');

debug('Creating locations router');
var router = express.Router();

debug('Adding locations route: GET / (Description: where locations are retrieved)');
router.get('/', locations.get); // => GET to / lists all locations

debug('Locations router exported');
module.exports = router;