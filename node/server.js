var express = require('express'),
    profile = require('./routes/profiles');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/profiles', profile.findAll);
app.get('/profiles/:id', profile.findById);
app.post('/profiles', profile.addprofile);
app.put('/profiles/:id', profile.updateprofile);
app.delete('/profiles/:id', profile.deleteprofile);
 
app.listen(3000);
console.log('Listening on port 3000...');
