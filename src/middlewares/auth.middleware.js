const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.headers["authorization"];

	isValidToken(token);

	jwt.verify(
		token,
		process.env.JWT_SECRET,
		function (err, decodedToken) {
			if (err) {
				const error = new Error("Invalid token");
				error.status = 401;
				throw error;
			}

			req.user = decodedToken.user;
			next();
		}
	);
};

function isValidToken(token) {
	if (!token) {
		const error = new Error("Token must be sent");
		error.status = 400;
		throw error;
	}
}
