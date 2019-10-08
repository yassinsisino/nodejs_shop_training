const products = [];
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
    products.push({title: req.body.title});
    res.redirect('/');
};

export const getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}