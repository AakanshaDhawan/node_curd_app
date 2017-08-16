//setting express app
const express = require('express');
const app = express();

//user schema
var userSchema = require('./app/user');

//connect to db
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

mongoose.Promise = global.Promise;
var db=configDB.url;
// configuration
mongoose.connect(configDB.url); // connect to our database

//route for home page
app.get('/', function(req, res) {
	userSchema.collection.find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {userSchema: result})
  })
});
	
//creating a middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser=require('cookie-parser');
app.use(cookieParser());

//add a new user
app.post('/add',function(req, res) {
        
            var user = new userSchema();     
           
            console.log(req.body.address);
		    user.name1=req.body.name1;
			user.address=req.body.address;
			user.email=req.body.email;
			user.mobnumber=req.body.mobnumber;
			user.dob=req.body.dob;
            console.log(user);

		user.save()
		
			.then(item => {
		     res.send("item saved to database");
			res.redirect('/');
			})
		.catch(err => {
			res.status(400).send("validation error");
			console.log(err);
			});
        
    });
		
app.get('/delete/:id',function(req,res){
	//res.send(req.params.id);
   userSchema.findOneAndRemove({name1:req.params.name1},function(err,data){
	if(err) {res.send(err);console.log("1");}
	else {res.send('removed');console.log("2");}
});
});
	
	//listening on port 3000
app.listen(3000, function() {
  console.log('listening on 3000')
})