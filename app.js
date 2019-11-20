
import path from 'path';
import express from 'express';

import { mongoConnect } from './utils/database';
import User from './models/user';
const app = express();

import { router as adminRoutes } from './routes/admin';
import { router as shopRoutes } from './routes/shop';
import { get404 } from './controllers/error';

app.set('view engine', 'ejs');
app.set('views', 'views')



app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use( (req, res, next) => {
    User.findById('5db81b901c9d440000851abc')
        .then(user => {
            req.user = new User(user.username, user.email, user.cart, user._id);
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(get404);

mongoConnect(() => {
    app.listen(3000, () => { console.log('Welcome, the server is running in port 3000\nConnexion a la base de donnees OK') });
});