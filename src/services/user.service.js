const BaseService = require("./base.service");
const userRepository = null;

class UserService extends BaseService{

	constructor({ UserRepository }){
		super(UserRepository);
		userRepository = UserRepository;
	}

	async getUserByUsername( username ){
		return await userRepository.getUserByUsername( username );
	}

}

module.exports = UserService;