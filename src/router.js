var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/address', controller.getAddress)
.then(router.get('/places', controller.getPlaces))

module.exports = router;


// || call getAddress in the controller file
