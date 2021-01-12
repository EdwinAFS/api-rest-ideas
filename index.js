require("./src/config");

const container = require("./src/server/container");
const server = container.resolve("server");

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose
	.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then(() => {
		server.start();
	})
	.catch(console.log);
