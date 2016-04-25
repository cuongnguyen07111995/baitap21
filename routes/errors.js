module.exports= function(app)
{
	//404s
	app.use(function(req, res, next)
	{
		if(req.accepts('html'))
        {
            return res.send("<h2> i'm sorry,i couldn't find that page.</h2>");
        }
res.status(404);
        if(req.accepts('json')){
            return res.json({error :'Not found'});  
        }
        //default response type
        res.type('txt');
        res.send("Hmmm,couldn't find that page.");
    })
//500
    app.use(function(err, req, res, next){
	     console.log('error at %s\n',req.url,err);
	     res.send(500,"kajkgjaga:anh cuong dep trai");
     })
}