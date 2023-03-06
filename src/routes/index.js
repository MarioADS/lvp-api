const routes = require('express').Router();
const searchServices = require('./search');

routes.use( searchServices );


module.exports = routes;