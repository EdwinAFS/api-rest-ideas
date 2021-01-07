const BaseService = require("./base.service");
const ideaRepository = null;

class IdeaService extends BaseService {
	constructor({ IdeaRepository }) {
		super(IdeaRepository);
		ideaRepository = IdeaRepository;
	}

	async getUserIdeas(author) {
		if (!author) {
			const error = new Error("the author is require");
			error.status = 400;
			throw error;
		}

		return await ideaRepository.getUserIdeas(author);
	}

	async voteIdeas( ideaId, like ) {

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

		like ? idea.upvote.push( true ) : idea.downvote.push( true );
	}
}

module.exports = IdeaService;
