import express, { Request, Response } from 'express';
import {eventController} from '../controllers/controllers'

export const eventRouter = express.Router();


eventRouter.post('/', (req:Request, res:Response) => {
    eventController.createEvent(req, res);
});
