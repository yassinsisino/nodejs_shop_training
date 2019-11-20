import mongodb from 'mongodb';
import dotenv from 'dotenv';

const denv = dotenv.config();
const MongoClient = mongodb.MongoClient;
const uri = process.env.URI;
let _db;

export const mongoConnect = (callback) => {
    MongoClient.connect( uri, { useUnifiedTopology: true, })
        .then(client => {
            callback();
            _db = client.db();
        })
        .catch(err => {
            console.log('error connexion');
            throw err;
        });
};

export const getDb = () => {
    if (_db){
        return _db;
    }
    throw 'Not be able to connect at the db';
};