import mongodb from 'mongodb';
import { getDb } from '../utils/database';
import { get } from 'http';

const ObjectId = mongodb.ObjectID;

export default class User {
    constructor(username, email, cart, id) {
        this.username = username;
        this.email = email;
        this.cart = cart;
        this._id = id;
    };

    save() {
        let db = getDb();
        return db.collection('users').insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    addToCart(product) {
        let db = getDb();
        const cartProductIndex = this.cart.items.findIndex(cp => {
            return cp.productId.toString() == product._id.toString();
        });
        let newQuantity = 1
        const updatedCartItems = [...this.cart.items];
        if (cartProductIndex >= 0) {
            updatedCartItems[cartProductIndex].quantity = updatedCartItems[cartProductIndex].quantity + 1;
        }
        else {
            updatedCartItems.push({ productId: new ObjectId(product._id), quantity: newQuantity });
        }
        const updatedCart = { items: updatedCartItems };
        return db
            .collection('users')
            .updateOne({ _id: new ObjectId(this._id) }, { $set: { cart: updatedCart } });
    }

    getCart() {
        const db = getDb();
        const productIds = this.cart.items.map(i => {
            return i.productId;
        });
        return db
            .collection('products')
            .find({ _id: { $in: productIds } })
            .toArray()
            .then(products => {
                return products.map(p => {
                    return {
                        ...p,
                        quantity: this.cart.items.find(i => {
                            return i.productId.toString() === p._id.toString();
                        }).quantity
                    };
                });
            });
    }

    deleteCartItem(itemId) {
        const cartUpdate = this.cart.items.filter(item => {
            return item.productId.toString() !== itemId.toString();
        });
        const db = getDb();
        return db.collection('users')
            .updateOne(
                { _id: new Object(this._id) },
                { $set: { cart: { items: cartUpdate } } }
            )
    }

    addOrder() {
        const db = getDb();
        return db.collection('orders')
            .insertOne(this.cart)
            .then(result => {
                this.cart = { items: [] };
                return db.collection('users')
                    .updateOne(
                        { _id: new ObjectId(this._id) },
                        { $set: { cart: { items: [] } } }
                    );
            })
            .catch(err => {
                console.log(err);
            });
    }
    getOrder() {
        const db = getDb();
        return db.collection('orders')
        
    }
    static findById(userId) {
        let db = getDb();
        return db.collection('users').findOne({ _id: new ObjectId(userId) })
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
            });
    }
}