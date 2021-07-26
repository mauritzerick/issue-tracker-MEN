const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);


/**
 * @description add issue
 * @method GET/add-issue
 */
route.get('/add-issue',services.add_issue);

/**
 * @description update issue
 * @method GET/update-issue
 */
route.get('/update-issue',services.update_issue);

//for API
route.post('/api/issues',controller.create);
route.get('/api/issues',controller.find);
route.put('/api/issues/:id',controller.update);
route.delete('/api/issues/:id',controller.delete);

module.exports = route;