var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('profiledb', server, {safe:false});
 
db.open(function(err, db) {
console.log('starting routes/profile');
    if(!err) {
        console.log("Connected to 'profiledb' database");
        db.collection('profiles', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'profiles' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
    else {
    	console.log("we have an error");
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving profile: ' + id);
    db.collection('profiles', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('profiles', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addprofile = function(req, res) {
    var profile = req.body;
    console.log('Adding profile: ' + JSON.stringify(profile));
    db.collection('profiles', function(err, collection) {
        collection.insert(profile, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateprofile = function(req, res) {
    var id = req.params.id;
    var profile = req.body;
    console.log('Updating profile: ' + id);
    console.log(JSON.stringify(profile));
    db.collection('profiles', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, profile, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating profile: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(profile);
            }
        });
    });
}
 
exports.deleteprofile = function(req, res) {
    var id = req.params.id;
    console.log('Deleting profile: ' + id);
    db.collection('profiles', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*----------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    var profiles = [
    {
        name: "ANDREW DAVIDSON",
        age: "20",
    },
    {
        name: "OWEN SMITH",
        age: "21",
    },
    {
        name: "JOSH MACKENZIE",
        age: "20",
    }];
 
    db.collection('profiles', function(err, collection) {
        collection.insert(profiles, {safe:true}, function(err, result) {});
    });
 
};
