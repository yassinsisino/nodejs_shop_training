import Product from '../models/product';

export const getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        editing: false
    })
};

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

export const getEditProduct = (req, res, next) => {
    let editMode = req.query.edit;
    if (!editMode){
        return res.redirect('/');
    }
    let productId = req.params.productId;
    Product.findById(productId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Add product',
            path: '/admin/add-product',
            editing: editMode,
            product: product
        });
    });
    
};

export const getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}

export const postEditProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

}