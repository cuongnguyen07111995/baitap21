var express =require('express');

module.exports =function(app){
	app.use(exports.logger('dev'));


	app.use(express.cookieParse());
	app.use(express.session({secret:'building a blog'}));
	app.use(express.bodyParser());

	app.use(function(req,res,next){
		res.locals.session =req.session;
		next();
	})
}