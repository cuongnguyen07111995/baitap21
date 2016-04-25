var mongoose= require('mongoose');
var User = mongoose.model('User',{name: String});
//var Schema = mongoose.Schema;

var cleanString =require('../helpers/cleanString');
var hash =require('../helpers/hash');
var crypto =require('crypto');


module.exports =function(app){

   //mongoose.model('user',schema);
	app.get('/signup',function(req, res){
		res.render('signup.jade');
	});
	//create new account


	app.post('/signup',function(req, res, next){
		var email = cleanString(req.param('email'));
		var pass =cleanString(req.param('pass'));
		var ten =cleanString(req.param('ten'));

		//var ten =cleanString(req.param('ten'));
		if(!(email && pass)){
			return invalid();
		} 

        email =email.toLowerCase();
	    User.findById(email, function(err, user){
		    if(err) return next(err);
		    if(user){
			   return res.render('signup.jade',{exists:true});
		     }
		crypto.randomBytes(16,function(err, bytes){
			if(err) return next(err);


			var user ={_id:email};
			 user.salt =bytes.toString('utf8');
			 user.hash=hash(pass, user.salt);

			 User.create(user,function(err, newUser){
			 	if(err){
			 		if(err instanceof mongoose.Error.ValidationError){
			 			return invalid();
			 		}
			 		return next(err);
			 	}

			 	//user created successfully

			 	req.session.isLoggedIn =true;
			 	req.session.user=email;
			 	console.log('create user :%s',email);
			 	return res.redirect('/');
			 })
		   })
	     })
	function invalid(){
		return res.render('signup.jade',{invalid:true});
	}
});    
//module.exports=mongoose.model('User',Schema);

app.get('/login',function(req, res){
	res.render('login.jade');
});
app.post('/login',function(req, res, next){
	var email = cleanString(req.param('email'));
		var pass =cleanString(req.param('pass'));
		if(!(email && pass)){
			return invalid();
		} 
    email =email.toLowerCase();
	User.findById(email, function(err, user){
		if(err) return next(err);
		if(!user){
			return invalid();
		}
		if(user.hash != hash(pass, user.salt))
			{

			return invalid();
		 	}

			 	//user created successfully

		req.session.isLoggedIn =true;
		req.session.user=email;
			 	//console.log('create user :%s',email);
	    res.redirect('/');
	})
});
}