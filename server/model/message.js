var db = require('../config');//.. is parent directory


var Message = db.Model.extend({
	tableName: 'blog',
	hasTimestamps: true
});

module.exports =  Message;