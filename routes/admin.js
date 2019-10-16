import express from 'express';

import {getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct, postDeleteProduct} from '../controllers/admin';

export const router  = express.Router();
// GET methode
router.get('/add-product', getAddProduct);
router.get('/products', getProducts);
router.get('/edit-product/:productId', getEditProduct);


// POST methode
router.post('/add-product', postAddProduct);
router.post('/edit-product', postEditProduct);
router.post('/delete-product', postDeleteProduct);