import express from 'express';
import * as imageControllers from "../controllers/image-controllers.js"

const imageRouter = express.Router();

imageRouter.get('/images', imageControllers.getAllImages);
imageRouter.get('/images/:event', imageControllers.getImagesByEvent);

export { imageRouter };