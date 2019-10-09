import Product from '../models/product';

export const getAddProduct = (req, res, next) => {
    res.render('add-product', { 
        pageTitle:'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
};

export const postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

export const getProducts = (req, res, next) => {
    res.render('shop', {
        prods: Product.fetchAll(), 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: Product.fetchAll().length > 0,
        activeShop: true,
        productCSS: true
    });
}