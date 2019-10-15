import fs from 'fs';
import path from 'path';

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

export default class Cart {
    static addProduct(id, productPrice) {
        //fetch the previous cart
        console.log('dans la fonction add product');
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            let productExisteIndex = cart.products.findIndex(prod => prod.id === id)
            //console.log('index du produit', productExisteIndex);
            if (productExisteIndex >= 0) {
                // update qty of product
                let productExiste = cart.products[productExisteIndex];
                productExiste.qty = productExiste.qty + 1;
                cart.totalPrice = cart.totalPrice + +productPrice;
            }
            else {
                // create new product in cart
                let newProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, newProduct];
                cart.totalPrice = cart.totalPrice + +productPrice;
            }
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        });
    }
}