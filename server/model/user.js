var db = require('../config.js');
//var bcrypt = require('bcrypt-nodejs');
//var User = require('/user.js');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true
});

module.exports =  User;