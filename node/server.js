var express = require('express'),
    profiles = require('./routes/profiles');

var app = express();

app.get('/profiles', profiles.findAll);
app.get('/profiles/:id', profiles.findById);

app.listen(3000);
console.log('Listening on port 3000...');
