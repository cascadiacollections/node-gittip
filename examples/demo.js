var Gittip = require('..')
  , g = new Gittip;

// GET Gittip's Pay Days JSON data
g.getPaydays(function(data) {
	console.log(data);
});

// GET Gittip's Stats JSON data
g.getStats(function(data) {
	console.log(data);
});

// GET Gittip User's Public JSON data
g.getUser({ name: 'KevinTCoughlin' }, function(data) {
	console.log(data);
});

// GET authenticated User's tip JSON data
g.getTips({}, function(data){
	console.log(data);
});

// POST create / update authenticated User's tip data
