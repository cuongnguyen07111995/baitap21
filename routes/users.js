router.use('/users', users);
{
	title:'Hello,World',
	id:'main',
	links:[
	{name :'Google',url :'http://google.com'},
	{name:'Facebook;' url: 'http://facebook.com'},
	{name:'Twitter',url:'http://twitter.com'}
	],
	upperHelper: function(string){
		return string.toUpperCase();
	}
}
