import express from 'express';

const app = express();

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';


app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).send('<h2>404 Page not found</h2>');
})

app.listen(3000, () => {console.log('Welcome, the server is running in port 3000')});