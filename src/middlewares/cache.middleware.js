const mcache = require('memory-cache');

module.exports = function( duration ){
	return (req, res, next) => {
		const key = process.env.CACHE_KEY + (req.originUrl || req.url);
		console.log(key);
		const cacheBody = mcache.get( key );

		if( cacheBody ){
			return res.send(JSON.parse(cacheBody));
		}else{
			res.sendReponse = res.send;
			res.send = body => {
				mcache.put(key, body, duration * 1000);
				res.sendReponse( body );
			}

			next();

		}
	}
}