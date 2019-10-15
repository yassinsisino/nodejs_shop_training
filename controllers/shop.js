import Product from '../models/product';
import Cart from '../models/cart';

export const getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/products'
        });
    });
};

export const getProduct = (req, res, next) =>{
    const prodId = req.params.productId;
    Product.findById(prodId, (prod) =>{
       res.render('shop/product-detail', {
           product: prod,
           pageTitle: prod.title,
           path:'/products'
       }) 
    });
};

export const getIndex = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            prods: products,
            pageTitle: 'shop',
            path: '/'
        });
    });
};

export const getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
};

export const postCart = (req, res, next) => {
    const prodId = req.body.productId;
    const price = req.body.price;
    Cart.addProduct(prodId, price);
    res.redirect('/cart');
};

export const getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
};

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};