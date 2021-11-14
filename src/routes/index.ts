import express, { Request, Response } from 'express';
import HomeController from '../infra/http/controllers/HomeController';

const routes = express.Router();
const homeController = new HomeController();

routes.get('/', homeController.index);

routes.get('/noticia/:slug', (req: Request, res: Response) => {
    const { slug } = req.params;
    return res.json({slug: slug});
});

export default routes;