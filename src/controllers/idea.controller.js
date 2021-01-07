let ideaService = null;

class IdeaController{
	constructor({ IdeaService }){
		ideaService = IdeaService;
	}

	async get(req, res){
		const { ideaId } = req.params;
		return res.send( await ideaService.get(ideaId) );
	}

	async getAll(req, res){
		return res.send( await ideaService.getAll() );
	}

	async create({ body }, res){
		return res.send( await ideaService.create( body ) );
	}

	async update({ params, body }, res){

		const { ideaId } = params;

		return res.send( await ideaService.update( ideaId, body ) );
	}

	async delete({ params }, res){

		const { ideaId } = params;

		return res.send( await ideaService.delete( ideaId ) );
	}

	async getUserIdeas({ params }, res){

		const { userId } = params;

		return res.send( await ideaService.getUserIdeas( userId ) );
	}

	async voteIdeas({ params }, res){

		const { userId, like } = params;

		return res.send( await ideaService.voteIdeas( userId, like ) );
	}
}

module.exports = IdeaController;