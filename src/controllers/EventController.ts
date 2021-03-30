import { Request, Response } from 'express';
import { SaveEventResponse } from '../common/SaveEventResponse';
import {Producer} from '../kafka/Producer';


export class EventController {

    public createEvent(req: Request, res: Response): void {

        const eventMessage = req.body;
        console.log("Request Payload is:", eventMessage);
        const eventId = Producer.pushMessage(eventMessage);
        const saveEventResponse = new SaveEventResponse();
        saveEventResponse.eventId = eventId;
        saveEventResponse.status = "SUCCESS";
        res.status(200).json(saveEventResponse);
    }

}