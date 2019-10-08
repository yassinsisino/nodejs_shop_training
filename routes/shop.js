import path from 'path';
import express from 'express';

import rootDir from '../utils/path';
import {products} from './admin';

let router;

export default router = express.Router();

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});