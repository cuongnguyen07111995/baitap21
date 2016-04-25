var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.t=Types.ObjectId;
var createdDate = require('../plugins/createdDate');

var schema = mongoose.Schema({
	text:{ type:String, trim: true, validate:validateText},
	post:{ type :ObjectId, index: true},
	author:String
})
function validateText (str)
{
	 return str.length < 250;
}

schema.plugin(createdDate);

//module.exports=mongoose.model('Comments',schema);