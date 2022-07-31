import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { apiRouter } from './routes/api.router';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.listen(5100, async () => {
    console.log(`Server has started on Port:${5100}`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
});
