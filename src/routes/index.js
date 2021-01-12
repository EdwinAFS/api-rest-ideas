const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { NotFoundMiddleware, ErrorMiddleware, ParseIntMiddleware } = require("../middlewares");
require("express-async-errors");

module.exports = ({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes }) => {
	const router = express.Router();
	const apiRouter = express.Router();

	apiRouter
		.use(express.json())
		.use(cors())
		.use(helmet())
		.use(compression());

	apiRouter.use(ParseIntMiddleware);

	apiRouter.use('/auth', AuthRoutes);

	apiRouter.use('/home', HomeRoutes);
	apiRouter.use('/user', UserRoutes);
	apiRouter.use('/idea', IdeaRoutes);
	apiRouter.use('/comment', CommentRoutes);

	router.use('/v1/api', apiRouter);

	router.use(NotFoundMiddleware);

	router.use(ErrorMiddleware);

	return router;
};
