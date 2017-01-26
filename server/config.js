var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '/db/shortly.sqlite3')
  },
  userNullAsDefault:true
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('blog').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('blog', function(t) {
      t.increments('id').primary();
      t.string('message', 100);
      t.string('title', 100);
      t.string('username', 255);
      t.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(t) {
      t.increments('id').primary();
      t.string('username', 100);
      t.string('password', 100);
      t.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;