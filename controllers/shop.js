import Product from '../models/product';

export const getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/products'
        });
    });
}

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
        path: '/cart',
    })
};

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout'), {
        pageTitle: 'Checkout',
        path: '/checkout'
    }
}