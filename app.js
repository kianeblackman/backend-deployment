import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import shoppingListRouter from './routes/shoppingList.js';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/items', shoppingListRouter);

export default app;
