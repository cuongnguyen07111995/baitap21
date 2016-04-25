/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index.ect', { title: 'home' });
});

module.exports = router;*/
var errors=require('./errors');
var login =require('./login');
//var posts=require('./posts');
//var mongoose=require('mongoose');
//var BlogPost= mongoose.model('BlogPost',{name:String});
module.exports=function(app)
{
	//home page
	app.get('/',function(req,res){
		//BlogPost.find().sort('created').limit(10).exec(function(err,posts){
			//if(err) return next(err);
			res.render('home.jade');
			// res.render('home.jade');
	})
	//login /logout routes
	login(app);
	 //blod posts crub
	 //posts(app);
	//error handlers
	errors(app);
}

