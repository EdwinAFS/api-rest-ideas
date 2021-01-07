class BaseService{

	constructor( repository ){
		this.repository = repository;
	}

	async get( id ){
		if(! id ){
			const error = new Error("the id is require");
			error.status = 400;
			throw error;
		}

		const entity = await this.repository.get(id);

		if(! entity ){
			const error = new Error("entity not found");
			error.status = 404;
			throw error;
		}

		return entity;
	}

	async getAll(){
		return await this.repository.getAll();
	}

	async create( entity ){
		return await this.repository.create( entity );
	}

	async update( id, entity ){

		if(! id ){
			const error = new Error("the id is require");
			error.status = 400;
			throw error;
		}

		return await this.repository.update( id, entity );
	}
	async delete( id ){

		if(! id ){
			const error = new Error("the id is require");
			error.status = 400;
			throw error;
		}

		return await this.repository.delete( id );
	}
}

module.exports = BaseService;