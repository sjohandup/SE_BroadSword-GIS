var _       = require('lodash');
var debug   = require('debug')('broadsword-gis-api:controllers:locations');
var Loc     = require('../../models/location');

debug('Initialising locations controller');

debug('Exporting method: get');
module.exports.get = function(req, res, next){
  debug('Trying to find locations');
  Loc.find(function(err, locations){
    debug('Checking for errors');
    if(err) return next(err);
    if(!locations) return next(new Error('Locations not found.'));

    debug('Building JSON:API response');
    var data = [];

    _.forEach(locations, function(location){
      var _data = {
        type: 'locations',
        id: location.id,
        attributes: {
          location_type: location.location_type,
		  room: location.room,
          building: location.building,
          lng: location.lng,
          lat: location.lat,
          level: location.level,
		  ground: location.ground
        }
      };

      data.push(_data);
    });

    var response = {
      data: data
    };

    debug('Sending response (status: 200)');
    res.status(200).send(response);
  });
};
