import fs, { fdatasync } from 'fs';
import path from 'path';

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, data) => {
        if (err)
            cb([]);
        else
            cb(JSON.parse(data));
    });
} 

export default class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    };

    save() {
        getProductsFromFile((products) =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            })
        });
    };

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};