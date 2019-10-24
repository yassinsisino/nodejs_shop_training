import express from 'express';

import { getProducts, getIndex, getProduct} from '../controllers/shop';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

// router.get('/cart', getCart);

// router.post('/cart', postCart);
// router.post('/cart-delete-item', postDeleteItem);

// router.get('/checkout', getCheckout);

// router.get('/orders', getOrders);

