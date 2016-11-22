var express  = require( 'express' ),
	mongoose = require( 'mongoose' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    session  = require('express-session'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

var sessionConfig = {
	secret:'CookieMonster', // Secret name for decoding secret and such
	resave:false, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly:false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}
require('./server/config/mongoose.js')


app.use(session(sessionConfig));
app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, './bower_components' )));
app.use(bp.urlencoded({extended:true}))
app.use(bp.json());



// app.use(function(req,res,next){
// 	// console.log(req.session);
// 	next();
// })

require("./server/config/routes.js")(app);


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});