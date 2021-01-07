const BaseService = require("./base.service");
let commentRepository = null;
let ideaRepository = null;

class CommentService extends BaseService{

	constructor({ CommentRepository, IdeaRepository }){
		super(CommentRepository);
		commentRepository = CommentRepository;
		ideaRepository = IdeaRepository;
	}

	async getUserIdeas( author ){
		return await commentRepository.getUserIdeas( author );
	}

	async getIdeasComments( ideaId ){
		if(! ideaId ){
			const error = new Error("the id is require");
			error.status = 400;
			throw error;
		}

		const idea =  await ideaRepository.get(ideaId);

		if( ! idea ){
			const error = new Error("idea not found");
			error.status = 404;
			throw error;
		}

		const { comments } = idea;

		return comments;
	}
	async createComment( comment, ideaId ){
		if(! ideaId ){
			const error = new Error("the id is require");
			error.status = 400;
			throw error;
		}

		const idea =  await ideaRepository.get(ideaId);

		if( ! idea ){
			const error = new Error("idea not found");
			error.status = 404;
			throw error;
		}

		const createdComment = await commentRepository.create( comment );

		idea.comments.push(createdComment);

		return await ideaRepository.update( ideaId, { comments: idea.comments } );
	}

}

module.exports = CommentService;