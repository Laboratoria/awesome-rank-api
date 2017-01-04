var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'laboraotria';

var models = require('./models');

var queryRank = "select d.name, d.lastname, d.age, d.campus, d.photoUrl, 'hse' as type, AVG(r.points) as average " +
  "from rankings r " +
  "inner join users u on r.userId = u.id " +
  "inner join developers d on r.developerId = d.id " +
  "inner join questions q on r.questionId = q.id " +
  "where q.type like 'hse%' and r.points > 0 " +
  "group by d.name, d.lastname, d.age, d.campus, d.photoUrl " +
  "union " +
  "select d.name, d.lastname, d.age, d.campus, d.photoUrl, 'tech' as type, AVG(r.points) as average " +
  "from rankings r " +
  "inner join users u on r.userId = u.id " +
  "inner join developers d on r.developerId = d.id " +
  "inner join questions q on r.questionId = q.id " +
  "where q.type = 'tech' and r.points > 0 " +
  "group by d.name, d.lastname, d.age, d.campus, d.photoUrl " +
  "order by 1, 2";

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
			res.json({ success: true, user: {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        company: user.company
      } });
		}
	});
});

apiRoutes.get('/developers', function(req, res) {
  models.Developer.all({
    order: 'name, lastname ASC'
  }).then(function (developers) {
    res.json({ developers: developers });
  });
});

apiRoutes.get('/questions', function(req, res) {
  models.Question.all({
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
  models.sequelize.query(queryRank, { type: models.sequelize.QueryTypes.SELECT})
    .then(function (results) {
      res.send({ success: true, ranking: results });
    });
});

app.use('/api', apiRoutes);

app.listen(app.get('port'), function () {
	console.log('Server started on port ' + app.get('port'));
})