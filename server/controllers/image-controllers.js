import { imageModel } from "../models/image-model.js";

// GET all images
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

// Add image to event
export async function addImageToEvent(req, res) {
  const { event } = req.params;
  const image = req.body;
  const newImage = new imageModel({ ...image, event });
  try {
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}