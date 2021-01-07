const { Router } = require('express')

module.exports = ({IdeaController}) => {

	const router = Router();

	router.get('/', IdeaController.getAll);
	router.get('/:ideaId', IdeaController.get);
	router.get('/:userId/all', IdeaController.getUserIdeas);
	router.post('/', IdeaController.create);
	router.post(':userId/vote', IdeaController.voteIdeas);
	router.patch('/:ideaId', IdeaController.update);
	router.delete('/:ideaId', IdeaController.delete);

	return router;

}