var connection = require('./db');
var query = require('./query');
var sampleData = require('./sample').data;
var db;

connection.connect()
    .then(function (database) {
        db = database;

        return query.clearAll(db, 'mydb');
    })
    .then(function (removed) {
        return query.insertInto(db, 'mydb', sampleData);
    })
    .then(function (results) {
        return query.getAll(db, 'mydb');
    })
    .then(function (documents) {
        console.log(documents);
        connection.disconnect(db);
    });
