const { model } = require("mongoose");

module.exports = {

	Idea: require('./idea.model'),
	User: require('./user.model'),
	Comment: require('./comment.model'),

}