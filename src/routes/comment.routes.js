const { Router } = require('express')

module.exports = ({CommentController}) => {

	const router = Router();

	router.get('/:commentId', CommentController.get);
	router.get('/:ideaId/comments', CommentController.getIdeasComments);
	router.post('/:ideaId', CommentController.createComment);
	router.patch('/:commentId', CommentController.update);
	router.delete('/:commentId', CommentController.delete);

	return router;

}