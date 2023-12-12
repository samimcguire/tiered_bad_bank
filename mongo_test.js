const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
    console.log('Connected!')

    // database name
    const dName = 'myproject';
    const db = client.db(dbName);

    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection ('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, fuction(err, result) {
        console.log('Document insert');
    });

    var customer = db
        .collection('customers')
        .find()
        .toArray(fuction(err, docs) {
            console.log('Collection: ', docs);

            //clean up
            client.close();
        });
});