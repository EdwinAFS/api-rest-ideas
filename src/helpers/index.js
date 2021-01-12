const { generateToken } = require("./jwt.helper");

module.exports = {
	jwtHelper: generateToken,
	CACHE_TIME: require("./cache-time.helper")
}