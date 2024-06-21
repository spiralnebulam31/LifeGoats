import { imageModel } from "../models/image-model.js";

//GET all images
export async function getAllImages(req, res) {
  try {
    const images = await imageModel.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// GET images by event
export async function getImagesByEvent(req, res) {
  const { event } = req.params;
  try {
    const images = await imageModel.find({ event });
    res.status(200).json(images);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}