import express from 'express';

import {getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct} from '../controllers/admin';

export const router  = express.Router();

router.get('/add-product', getAddProduct);

router.get('/products', getProducts);

router.post('/add-product', postAddProduct);

router.get('/edit-product/:productId', getEditProduct);

router.post('/edit-product', postEditProduct)