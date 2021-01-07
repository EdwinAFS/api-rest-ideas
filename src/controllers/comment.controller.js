let commentService = null;

class CommentController{
	constructor({ CommentService }){
		commentService = CommentService;
	}

	async get(req, res){
		const { commentId } = req.params;
		return res.send( await commentService.get(commentId) );
	}

	async createComment({ params, body }, res){

		const { ideaId } = params;

		return res.send( await commentService.createComment( body, ideaId ) );
	}

	async update({ params, body }, res){

		const { commentId } = params;

		return res.send( await commentService.update( commentId, body ) );
	}

	async delete({ params }, res){

		const { commentId } = params;

		return res.send( await commentService.delete( commentId ) );
	}

	async getIdeasComments({ params }, res){

		const { ideaId } = params;

		return res.send( await commentService.getIdeasComments( ideaId ) );
	}

}

module.exports = CommentController;