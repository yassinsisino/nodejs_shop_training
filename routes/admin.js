import path from 'path';
import express from 'express';

import rootDir from '../utils/path';

let router;
export default router  = express.Router();
export const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});