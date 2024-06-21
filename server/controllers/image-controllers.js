import { imageModel } from "../models/models.js";

export async function getAllImages(req, res) {
  try {
    const images = await imageModel.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
