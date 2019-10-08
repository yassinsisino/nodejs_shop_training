import path from 'path';
import express from 'express';

import rootDir from '../utils/path';

let router;
export default router  = express.Router();
export const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { 
        pageTitle:'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
});

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});