import express from 'express';

import {getAddProduct, postAddProduct} from '../controllers/products';


export const router  = express.Router();
export const products = [];

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);