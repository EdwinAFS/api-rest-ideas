const { sign } = require('jsonwebtoken');

module.exports.generateToken = function( user ) {
	return sign(
		{ user },
		process.env.JWT_SECRET, 
		{ expiresIn: '4h' }
	);
}