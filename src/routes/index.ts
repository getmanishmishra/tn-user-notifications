import express, { Request, Response } from 'express';
import {indexController} from '../controllers/controllers'

export const indexRouter = express.Router();


indexRouter.get('/', (req:Request, res:Response) => {
    indexController.getDefaultPage(req, res);
});



