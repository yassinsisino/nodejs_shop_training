import express from 'express';

let router;

export default router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to ExpressJS</h1>');
});

