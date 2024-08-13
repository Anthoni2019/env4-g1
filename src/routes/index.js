const express = require('express');
const routerUser = require('./user.router');
const routerPost = require('./post.router');
const routerFavorite = require('./favorite.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser);
router.use("/posts", routerPost);
router.use("/favorites", routerFavorite);

module.exports = router;