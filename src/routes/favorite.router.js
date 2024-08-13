const {  } = require('../controllers/favorite.controllers');
const express = require('express');

const routerFavorite = express.Router();
 routerFavorite.route('/')
    //.get(getAll)

module.exports = routerFavorite;