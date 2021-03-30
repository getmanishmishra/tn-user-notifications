import { HttpStatusCode } from "./HttpStatusCode";
import {TrueNorthUNBaseError} from './TrueNorthUNBaseError';

export class APIError extends TrueNorthUNBaseError {
    constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
      super(name, httpCode, description, isOperational);
    }
   }