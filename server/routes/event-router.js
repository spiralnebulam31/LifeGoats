import express from 'express';
import * as eventControllers from "../controllers/event-controllers.js"

const eventRouter = express.Router();

eventRouter.get('/events', eventControllers.getAllEvents);
eventRouter.get('/events/:id', eventControllers.getEventById);
eventRouter.post('/events', eventControllers.createEvent);

export { eventRouter };