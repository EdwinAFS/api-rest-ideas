const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const server = require('./index');

// Services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const router = require('../routes/index');
const { HomeRoutes } = require('../routes/index.routes');

// Models
const { Idea, User, Comment } = require('../models');

// Repository
const { IdeaRepository, UserRepository, CommentRepository } = require('../repositories');


// Container
const container = createContainer();

container
	.register({
		router: asFunction(router).singleton(),
		server: asClass(server).singleton()
	})
	.register({
		Idea: asValue(Idea),
		Comment: asValue(Comment),
		User: asValue(User)
	})
	.register({
		HomeService: asClass(HomeService).singleton(),
		UserService: asClass(UserService).singleton(),
		IdeaService: asClass(IdeaService).singleton(),
		CommentService: asClass(CommentService).singleton()
	})
	.register({
		HomeController: asClass(HomeController.bind(HomeController)).singleton()
	})
	.register({
		HomeRoutes: asFunction( HomeRoutes ).singleton()
	})
	.register({
		IdeaRepository: asClass( IdeaRepository ).singleton(),
		UserRepository: asClass( UserRepository ).singleton(),
		CommentRepository: asClass( CommentRepository ).singleton()
	});

module.exports = container;