if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
	process.env.SWAGGER_PATH = 'swagger.development';
}else {
	process.env.SWAGGER_PATH = 'swagger.production';
}
