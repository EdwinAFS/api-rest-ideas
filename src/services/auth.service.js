const { jwtHelper } = require("../helpers");
let userService = null;

class AuthService{
	constructor({ UserService }){
		userService = UserService;
	}

	async signUp( user ){
		const { username } = user;

		const userExist = await userService.getUserByUsername( username );

		if( userExist ){
			const error = new Error('Username already exists');
			error.status = 401;
			throw error;
		}

		return await userService.create( user );
	}

	async signIn( user ){
		const { username, password } = user;
		const userExist = await userService.getUserByUsername( username );

		if( ! userExist ){
			const error = new Error('Username does not exist');
			error.status = 404;
			throw error;
		}

		const isValidPassword = userExist.comparePassword( password );

		if( ! isValidPassword ){
			const error = new Error('Invalid password');
			error.status = 400;
			throw error;
		}

		const token = jwtHelper({
			username,
			id: userExist._id
		});

		return {
			token,
			user: userExist
		};

	}
}

module.exports = AuthService;