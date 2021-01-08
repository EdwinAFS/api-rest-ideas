let authService = null;

class AuthController{
	constructor({AuthService}){
		authService = AuthService;
	}

	async signUp( { body }, res ){
		return res.status(201).send( await authService.signUp( body ) );
	}

	async signIn({ body }, res){
		return res.send( await authService.signIn( body ) );
	}


}

module.exports = AuthController;