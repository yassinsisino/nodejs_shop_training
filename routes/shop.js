import path from 'path';
import express from 'express';

import rootDir from '../utils/path';
import {products} from './admin';

let router;

export default router = express.Router();

router.get('/', (req, res, next) => {
    console.log(products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});