import { Request, Response } from 'express';

export class EventController {

    public createEvent(req: Request, res: Response): void {

        console.log("Request Payload is:", req.body);
        res.status(200).json({ message: 'Welcome to Event Producer Default Page!' });
    }

}