var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'laboraotria';

var models = require('./models');

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

var apiRoutes = express.Router(); 

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

app.use('/api', apiRoutes);

app.use(cors({ origin: null }));

app.listen(app.get('port'), function () {
	console.log('Server started on port ' + app.get('port'));
})