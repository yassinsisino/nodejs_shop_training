import express from 'express';

import { getProducts, getIndex, getCart, getCheckout } from '../controllers/shop';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);

