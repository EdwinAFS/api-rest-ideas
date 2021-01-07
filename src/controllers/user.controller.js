let userService = null;

class UserController{
	constructor({UserService}){
		userService = UserService;
	}

	async get(req, res){
		const { userId } = req.params;
		return res.send( await userService.get(userId) );
	}

	async getAll(req, res){
		return res.send( await userService.getAll() );
	}

	async update({ params, body }, res){

		const { userId } = params;

		return res.send( await userService.update( userId, body ) );
	}

	async delete({ params }, res){

		const { userId } = params;

		return res.send( await userService.delete( userId ) );
	}
}

module.exports = UserController;