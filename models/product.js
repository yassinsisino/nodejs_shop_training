import mongodb from 'mongodb';

import { getDb } from '../utils/database';

export default class Product {
    constructor(title, imageUrl, price, description, id) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        this._id = id;
    };

    save() {
        const db = getDb();
        let prodDb;
        if (this._id) {
            //update product
            prodDb = db.collection('products').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: {title: this.title, imageUrl: this.imageUrl, price:this.price, description: this.description} });
        }
        else {
            //add new product
            prodDb = db.collection('products').insertOne(this)
        }
        return prodDb
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    };

    static fetchAll() {
        const db = getDb();
        return db
            .collection('products')
            .find()
            .toArray()
            .then(products => {
                return products;
            })
            .catch(err => {
                console.log(err);
            })
    }

    static findById(prodId) {
        const db = getDb();
        return db.collection('products').find({ _id: new mongodb.ObjectId(prodId) }).next()
            .then(product => {
                return product;
            })
            .catch(err => {
                console.log(err);
            })
    }

    static deleteById(prodId) {
        const db = getDb();
        db.collection('products').deleteOne({ _id: mongodb.ObjectId(prodId) })
            .then(product => {
                console.log(product);
            })
            .catch(err => {
                console.log(err);
            });
    }
};