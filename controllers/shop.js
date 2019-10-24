import Product from '../models/product';
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
    .then (product =>{
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        })
    })
    .catch (err =>{
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

// export const getCart = (req, res, next) => {
//     Cart.getCart(cart => {
//         if (cart) {
//             Product.fetchAll(products => {
//                 const cartProducts = [];
//                 for (const product of products) {
//                     const cartProduct = cart.products.find(prod => prod.id === product.id);
//                     if (cartProduct)
//                         cartProducts.push({ productData: product, qty: cartProduct.qty });
//                 }
//                 res.render('shop/cart', {
//                     pageTitle: 'Your Cart',
//                     path: '/cart',
//                     products: cartProducts
//                 });
//             });
//         }
//         else {
//             res.redirect('/');
//         }
//     });
// };

// export const postCart = (req, res, next) => {
//     const prodId = req.body.productId;
//     const price = req.body.price;
//     Cart.addProduct(prodId, price);
//     res.redirect('/cart');
// };

// export const postDeleteItem = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findById(prodId, product => {
//         Cart.deleteProduct(prodId, product.price);
//         res.redirect('/cart');
//     });
// };

// export const getOrders = (req, res, next) => {
//     res.render('shop/orders', {
//         pageTitle: 'Your Orders',
//         path: '/orders'
//     });
// };

// export const getCheckout = (req, res, next) => {
//     res.render('shop/checkout', {
//         pageTitle: 'Checkout',
//         path: '/checkout'
//     });
// };