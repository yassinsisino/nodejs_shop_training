import Product from '../models/product';

export const getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        editing: false
    })
};

export const getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => {
            console.log(err);
        })
}

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description, null);
    product.save();
    res.redirect('/');
};

export const getEditProduct = (req, res, next) => {
    let editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    let productId = req.params.productId;
    Product.findById(productId)
        .then(product => {
            res.render('admin/edit-product', {
                pageTitle: 'Add product',
                path: '/admin/add-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => {

        })
    // Product.findById(productId, product => {
    //     if (!product) {
    //         return res.redirect('/');
    //     }
    //     res.render('admin/edit-product', {
    //         pageTitle: 'Add product',
    //         path: '/admin/add-product',
    //         editing: editMode,
    //         product: product
    //     });
    // });
};

export const postEditProduct = (req, res, next) => {
    const id = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const updatedProduct = new Product(title, imageUrl, price, description, id);
    updatedProduct.save();
    res.redirect('/admin/products');
}

export const postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
};