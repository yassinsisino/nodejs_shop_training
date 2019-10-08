import path from 'path';

import express from 'express';

const app = express();

import { router as adminRoutes } from './routes/admin';
import { router as shopRoutes } from './routes/shop';
import { get404 } from './controllers/error';
 
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(get404);

app.listen(3000, () => {console.log('Welcome, the server is running in port 3000')});