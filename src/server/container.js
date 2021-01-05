const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const server = require('./index');

// Services
const { HomeService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const router = require('../routes/index');
const { HomeRoutes } = require('../routes/index.routes');

// Container
const container = createContainer();

container
	.register({
		router: asFunction(router).singleton(),
		server: asClass(server).singleton()
	})
	.register({
		HomeService: asClass(HomeService).singleton()
	})
	.register({
		HomeController: asClass(HomeController.bind(HomeController)).singleton()
	})
	.register({
		HomeRoutes: asFunction( HomeRoutes ).singleton()
	});

module.exports = container;