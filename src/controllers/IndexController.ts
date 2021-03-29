import { Request, Response } from 'express';

export class IndexController {

    public getDefaultPage(req: Request, res: Response): void {
        res.json({ message: 'Welcome to Event Producer Default Page!' });
    }

}