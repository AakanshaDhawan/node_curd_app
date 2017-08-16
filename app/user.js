// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
    
	name1             : {
         type        : String,
		 required: true ,
    },
	address          : {
         type        : String,
		 required    : true ,
    },
	
	email            : {
         type        : String,
		 required    : true ,
    },
	dob      : {
         type        : Date,
		 required    : true ,
    },
	mobnumber        : {
         type        : Number,
		 min         : 7777777777,
		 max         : 9999999999,
		 required    : true ,
    },
	   
});



// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
