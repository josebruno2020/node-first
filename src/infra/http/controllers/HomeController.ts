import { Request, Response } from "express";

class HomeController {
    
    public async index(req: Request, res: Response): Promise<Response> {
        return res.json('Index da home');
    }
}

export default HomeController;