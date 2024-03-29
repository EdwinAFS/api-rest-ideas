const mongoose = require("mongoose");
const { Schema } = mongoose;

const ideaSchema = new Schema({
	idea: { type: String, required: true },
	description: { type: String },
	upvotes: [{ type: Boolean }],
	downvotes: [{ type: Boolean }],
	author: { 
		type: Schema.Types.ObjectId,
		ref: "user",
		require: true,
		autopopulate: true,
	},
	comments: [{ 
		type: Schema.Types.ObjectId,
		ref: "comment",
		require: true,
		autopopulate: true,
	}]
});

ideaSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("idea", ideaSchema);
