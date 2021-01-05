const express = require("express");

let _express = null;

class Server{
	constructor({router}){
		_express = express().use(router);
	}

	start(){
		return new Promise( resolve =>{
			_express.listen( process.env.PORT, ()=>{
				console.log( process.env.APPLICATION_NAME + ' API se esta ejecutando en el puerto ' + process.env.PORT);
			});

			resolve();
		});
	}
}

module.exports = Server;
