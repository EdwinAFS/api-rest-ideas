const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { CacheMiddleware } = require('../middlewares');
const { CACHE_TIME } = require('../helpers');

module.exports = ({UserController}) => {

	const router = Router();

	router.get('/', [authMiddleware], CacheMiddleware(CACHE_TIME.ONE_HOUR), UserController.getAll);
	router.get('/:userId', UserController.get);
	router.patch('/:userId', UserController.update);
	router.delete('/:userId', UserController.delete);

	return router;

}