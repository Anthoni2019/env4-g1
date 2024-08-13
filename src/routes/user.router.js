const { getAll, create, getOne, remove, update, login, logged, setPosts } = require('../controllers/user.controllers');
const { createF, getAllF} = require('../controllers/favorite.controllers');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');


const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJWT, logged)

routerUser.route('/:id/posts')
    .post(verifyJWT, createF ) 
    .get(verifyJWT, getAllF)


routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;