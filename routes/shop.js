import express from 'express';

import { getProducts, getIndex, getCart, getCheckout, getOrders, getProduct, postCart } from '../controllers/shop';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.get('/checkout', getCheckout);

router.get('/orders', getOrders);

