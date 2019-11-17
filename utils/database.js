import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://yassin:Yassin@mongo-cluster-1-molnx.mongodb.net/shop?retryWrites=true&w=majority';

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