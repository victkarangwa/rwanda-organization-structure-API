const express = require('express');
const locationController = require('../controllers');

const locationRoute = express.Router();

locationRoute.get('/', locationController.getAll);
locationRoute.get('/provinces', locationController.getProvinces);
locationRoute.get('/districts', locationController.getDistricts);
locationRoute.get('/sectors', locationController.getSectors);
locationRoute.get('/cells', locationController.getCells);
locationRoute.get('/villages', locationController.getVillages);


export default locationRoute;
