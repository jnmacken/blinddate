exports.findAll = function(req, res) {
	res.send([{name:'profile1'}, {name:'profile2'}, {name:'profile3'}]);
};

exports.findById = function(req, res) {
	res.send({id:req.params.id, name: "The Name", description: "description"});
};
