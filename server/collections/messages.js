var db = require('../config');
var Message = require('../models/message');

var Messages = new db.Collection();

Links.model = Message;

module.exports = Messages;
