let commentService = null;

class CommentController{
	constructor({ CommentService }){
		commentService = CommentService;
	}

	async get(req, res){
		const { commentId } = req.params;
		return res.send( await commentService.get(commentId) );
	}

	async getAll(req, res){
		return res.send( await commentService.getAll() );
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

	async getIdeaComments({ params }, res){

		const { ideaId } = params;

		return res.send( await commentService.getIdeaComments( ideaId ) );
	}

}

module.exports = CommentController;