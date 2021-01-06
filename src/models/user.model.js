const mongoose = require('mongoose');
const { compareSync, hashSync, genSaltSync} =require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {type: string, required: true},
	username: {type: string, required: true},
	password: {type: string, required: true}
});

userSchema.methods.toJSON = function(){
	let user = this.toObject();
	delete user.password;
	return user;
};

userSchema.methods.comparePassword = function( password ){
	return compareSync(password, this.password);
}

userSchema.pre('save', async function( next ){
	const user = this;

	if( !user.isModified("password")){
		return next();
	}

	const salt = genSaltSync(10);
	const hashPassword = hashSync(user.password, salt);

	user.password = hashPassword;

	return next();
});

module.exports = mongoose.model( 'user', userSchema );

