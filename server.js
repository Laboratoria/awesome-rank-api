var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'laboraotria';

var rankQuery = '';
var models = require('./models');

fs.readFile('./queries/ranking.sql', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  rankQuery = data.split("\n\n");
});

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var apiRoutes = express.Router();

var encrypt = function (text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
};

var decrypt = function (text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
};

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + app.get('port') + '/api');
});

apiRoutes.post('/login', function(req, res) {
    var auth = {
    	username: req.body.username,
    	password: req.body.password
    };

    models.User.find({
    	where: {
    		username: auth.username,
    		password: encrypt(auth.password)
    	}
    }).then(function(user) {
		if (!user) {
			console.log('No user with the username ' + auth.username + ' has been found.');
			res.json({ success: false });
		} else {
			console.log('All attributes of user:', user.get());
			res.json({ success: true, user: user });
		}
	});
});

apiRoutes.get('/developers', function(req, res) {
  var developerFilter = {
		campusId: req.query.campusId
	};
	var squadFilter = {
		userId: req.query.userId
	};
  models.Squad.findAll({
    attributes: ['id', 'name'],
    include: [{
      model: models.Developer,
      attributes: ['id', 'name', 'lastname', 'photoUrl', 'title', 'captainLink'],
      where: developerFilter
    }],
		where: squadFilter,
    order: [
      [ 'name', 'ASC' ],
      [ models.Developer, 'name', 'ASC' ],
      [ models.Developer, 'lastname', 'ASC' ]
    ]
  }).then(function (squads) {
    res.json({ squads: squads });
  });
});

apiRoutes.get('/questions', function(req, res) {
  models.Question.all({
		where: {
			active: true
		},
    include: [{
      model: models.Answer,
    }]
  }).then(function (questions) {
    res.json({ questions: questions});
  });
});

apiRoutes.post('/ratings', function(req, res) {
  var user, developer, question;
  var ratings = JSON.parse(req.body.ratings);
  models.Ranking.bulkCreate(ratings)
    .then(function (ratings) {
      res.send({ success: true, rank: ratings });
    });
});

apiRoutes.get('/ranking', function (req, res) {
  var campusId = req.query.campusId;
  models.sequelize.query(rankQuery[0], {
		replacements: [ campusId, campusId, campusId ]
	}).then(function (ranking) {
		res.send({ success: true, ranking: ranking });
  }).catch(function (err) {
    console.log(err);
  });
});

app.use('/api', apiRoutes);

app.listen(app.get('port'), function () {
	console.log('Server started on port ' + app.get('port'));
})
