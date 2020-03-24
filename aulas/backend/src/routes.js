const express = require('express');

const OngController = required('./controller/OngController');
const IncidentController = required('./controller/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);

module.exports = routes;