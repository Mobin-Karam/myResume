#!/usr/bin/env node

var _ = require('underscore');
var argv = require('gnu-argv');
var connection = require('connect2mongo/db');
var query = require('connect2mongo/query');
var sampleData = require('connect2mongo/sample').data;
var db;

argv.set([
    {
        reference: 'version',
        option: 'v',
        longOptions: 'version'
    },{
        reference: 'help',
        option: 'h',
        longOptions: 'help'
    },{
        reference: 'host',
        longOptions: 'host',
        arguments: true
    },{
        reference: 'port',
        longOptions: 'port',
        arguments: true
    },{
        reference: 'db',
        longOptions: 'db',
        arguments: true
    }
]);

var host = false;
if (argv.get('host')[0]) {
    host = argv.get('host')[0];
}

var port = false;
if (argv.get('port')[0]) {
    port = argv.get('port')[0];
}

var db = false;
if (argv.get('db')[0]) {
    db = argv.get('db')[0];
}

connection.connect(host, port, db)
    .then(function (database) {
        console.log('✔ Connected to MongoDB Server');
        db = database;

        return query.clearAll(db, 'test');
    })
    .then(function (removed) {
        console.log('✔ Cleared collection');

        return query.insertInto(db, 'test', sampleData);
    })
    .then(function (results) {
        console.log('✔ Inserted data into collection');

        return query.getAll(db, 'test');
    })
    .then(function (documents) {
        console.log('✔ Retrieved data from collection');

        getFavouriteFruits(documents);

        connection.disconnect(db);

        console.log('✔ Disconnected from MongoDB Server');
    });

var getFavouriteFruits = function (documents) {
        var x = _.groupBy(documents, function (document) {
            return document.favoriteFruit;
        });
        console.log(Object.keys(x));
};
