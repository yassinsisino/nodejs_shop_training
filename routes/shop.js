import express from 'express';

import { getProducts, getIndex, getProduct, postCart, getCart, postDeleteItem, postOrder, getOrders} from '../controllers/shop';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);
router.post('/cart-delete-item', postDeleteItem);

// router.get('/checkout', getCheckout);

router.post('/create-order', postOrder);
router.get('/orders', getOrders);

