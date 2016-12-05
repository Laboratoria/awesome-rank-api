var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'laboraotria';

var models = require('./models');

var queryRank = "select d.name, d.lastname, d.age, d.campus, 'hse' as type, AVG(r.points) as average " +
  "from rankings r " +
  "inner join users u on r.userId = u.id " +
  "inner join developers d on r.developerId = d.id " +
  "inner join questions q on r.questionId = q.id " +
  "where q.type like 'hse%' " +
  "group by d.name, d.lastname, d.age, d.campus " +
  "union " +
  "select d.name, d.lastname, d.age, d.campus, 'tech' as type, AVG(r.points) as average " +
  "from rankings r " +
  "inner join users u on r.userId = u.id " +
  "inner join developers d on r.developerId = d.id " +
  "inner join questions q on r.questionId = q.id " +
  "where q.type = 'tech' " +
  "group by d.name, d.lastname, d.age, d.campus " +
  "order by 1";

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
  models.Developer.all().then(function (developers) {
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
  models.User.findById(req.body.userId)
    .then(function (_user) {
      user = _user;
      return models.Developer.findById(req.body.developerId);
    })
    .then(function (_developer) {
      developer = _developer;
      return models.Question.findById(req.body.questionId);
    })
    .then(function (_question) {
      question = _question;
      return models.Ranking.create({
        UserId: user.id,
        DeveloperId: developer.id,
        QuestionId: question.id,
        points: req.body.points
      });
    })
    .then(function (_rating) {
      res.send({ success: true, rank: _rating });
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