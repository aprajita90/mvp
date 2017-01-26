var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')
var session = require('express-session')
var bcrypt = require('bcrypt-nodejs')
var sys = require('util');
var Users = require('./server/collections/users');
var User = require('./server/model/user.js');
var Message = require('./server/model/message.js');
var app = express();
//app.use(express.bodyParser.json());
//app.use(express.cookiesParser('shhhh, very secret'));
//app.use(express.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

var createSession = function(req, res, newUser){
  return req.session.regenerate(function(){
    req.session.user = newUser;
    res.redirect('/');
    });
}

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}
 
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get('/signup', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get('/logout', function(request, response){
    request.session.destroy(function(){
        response.redirect('/login');
    });
});

app.get('/authenticate', function(req, res) {
  if(req.session.user) {
    res.send(true)
  } else {
    res.send(false);
  }
})

app.get('/blog', function(req, res){
  //console.log("---------------", req);
Message.query(function(qb) {
	//console.log(qb);
  qb.where({username:req.session.user});
  console.log({message:req.session.user});
}).fetchAll()
  .then(function(collection) {
  	var arr = []
  	//console.log(collection.models[0].attributes.message)
    for(var i = 0; i<collection.models.length; i++){
    	//console.log(collection.models[i])
    	arr.push(collection.models[i].attributes);	
      //console.log(arr)
    }
    res.send(arr);
  });
	
})

app.get('/message', function(req, res){
Message.query(function(qb) {
   //console.log(qb);
  //qb.where({username:req.session.user});
  //console.log({message:req.session.message})
  qb.where('username', 'Not LIKE', req.session.user);
}).fetchAll()
  .then(function(collection) {
  	var arr = []
  	//console.log(collection.models[0].attributes.message)
    for(var i = 0; i<collection.models.length; i++){
    	//console.log(collection.models[i])
    	arr.push(collection.models[i].attributes);	
    }
    res.send(arr);
  });
	
})

app.route('/connection').get(function(req, res) {

        res.render('index.html',{});

        if (req.session.state) {
            res.json({state: req.session.state});
        }

    })


app.post('/blog',restrict, function(req, res) {

  var message = new Message({
        message: req.body.message,
        title:req.body.title,
        username: req.session.user
      });
  message.save().then(function() {
    //console.log(res)
          return res.send(200,message);
    });
});

app.post('/login', function(req, res){
	var username = req.body.username;
    var password = req.body.password;
 
    new User({username: username}).fetch().then(function(user){
      if(!user){
        return res.redirect('/login');
      }
      bcrypt.compare(password, user.get('password'), function(err, match){
        if(match){
          createSession(req, res, username);
        }else{
          res.redirect('/login');
        }
      })
    });
})

app.post('/signup', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  //console.log(username);
  new User({ username: req.body.username}).fetch().then(function(user) {
    //console.log(user)
   if (!user) {
    bcrypt.hash(password, null, null, function(err, hash){
      Users.create({
        username: username,
        password: hash
      }).then(function(user){
        //console.log(user)
        createSession(req, res, username);
      });
    });
   }else{
    res.redirect('/login')
   }  
});
})


app.listen(3000);