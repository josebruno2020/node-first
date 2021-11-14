import express, { Request, Response } from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(routes);

app.use((req:Request, res: Response) => {
    res.status(404).json('Página não encontrada');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));