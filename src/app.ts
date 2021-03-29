import express from 'express';
import env from 'dotenv';


// Routers
import {indexRouter,eventRouter} from './routes/routes';


// initialize configuration
env.config();


// Initializing Express
const app = express();
app.use(express.json());

const host = process.env.HOST_NAME;
const port = process.env.PORT; // default port to listen


// starting the Express server
app.listen( port, () => {
    console.log( `server started at ${host}:${ port }` );
} );


// Different Routs which are available from Event Producer
app.use('/api/event', eventRouter);

// This is Default Routs
app.use('/', indexRouter);


