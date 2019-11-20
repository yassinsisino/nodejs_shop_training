import Product from '../models/product';
import User from '../models/user';
// import Cart from '../models/cart';

export const getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All products',
                path: '/products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products'
            })
        })
        .catch(err => {
            console.log(err);
        });
};

export const getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All products',
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCart = (req, res, next) => {
    req.user.getCart()
        .then(cartProducts => {
            res.render('shop/cart', {
                pageTitle: 'Your Cart',
                path: '/cart',
                products: cartProducts
            });
        })
        .catch(err => {
            console.log(err)
        })

};

export const postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId).then(product => {
        req.user.addToCart(product)
            .then(result => {
                res.redirect('/cart');
                console.log(result);
            })
    });
};

export const postDeleteItem = (req, res, next) => {
    const prodId = req.body.productId;
    req.user.deleteCartItem(prodId)
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
        });
};

export const getOrders = (req, res, next) => {
    req.user.getOrders()
        .then(result => {
            return res.render('shop/orders', {
                pageTitle: 'Your Orders',
                path: '/orders',
                orders: result
            });
        })
        .catch(err => {
            console.log(err);
        })
};

export const postOrder = (req, res, next) => {
    req.user.addOrder()
        .then(result => {
            console.log(result);
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
        });
};

// export const getCheckout = (req, res, next) => {
//     res.render('shop/checkout', {
//         pageTitle: 'Checkout',
//         path: '/checkout'
//     });
// };