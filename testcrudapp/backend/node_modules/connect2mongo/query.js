var BPromise = require('bluebird');

/**
 * Get all the Documents of a MongoDB Collection
 * @param   {String} database       A MongoDB Connection Instance
 * @param   {String} collection     The MongoDB Collection name
 * @resolve {Array}  documents      The Documents of that collection
 * @reject  {Error}  err            The Error Object
 */
exports.getAll = function (database, collection) {
    return new BPromise(function (resolve, reject) {
        var col = database.collection(collection);

        col.find().toArray(function (err, documents) {
            if (err) {
                reject(err);
            } else {
                resolve(documents);
            }
        });
    });
};

/**
 * Clear all Documents of a MongoDB Collection
 * @param   {String} database       A MongoDB Connection Instance
 * @param   {String} collection     The MongoDB Collection name
 * @resolve {Object} removed        The Documents removed
 * @reject  {Error}  err            The Error Object
 */
exports.clearAll = function (database, collection) {
    return new BPromise(function (resolve, reject) {
        var col = database.collection(collection);

        col.remove({}, function (err, removed) {
            if (err) {
                reject(err);
            } else {
                resolve(removed);
            }
        });
    });
};

/**
 * Inserts Documents into a MongoDB Collection
 * @param   {String} database       A MongoDB Connection Instance
 * @param   {String} collection     The MongoDB Collection name
 * @param   {Object} data           The Documents to be inserted
 * @resolve {Object} results        The results
 * @reject  {Error}  err            The Error Object
 */
exports.insertInto = function (database, collection, data) {
    return new BPromise(function (resolve, reject) {
        var col = database.collection(collection);

        col.insert(data, function (err, results) {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
