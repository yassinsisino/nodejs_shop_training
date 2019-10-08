import path from 'path';

import express from 'express';

import rootDir from './utils/path';

const app = express();

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not found',
        path: ''
    });
})

app.listen(3000, () => {console.log('Welcome, the server is running in port 3000')});