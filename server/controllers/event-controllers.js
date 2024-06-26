import { eventModel } from "../models/event-model.js";

// GET all events
export async function getAllEvents(req, res) {
  try {
    const events = await eventModel.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// GET event by id
export async function getEventById(req, res) {
  const { id } = req.params;
  try {
    const event = await event
        .findById(id)
        .populate("images")
    res.status(200).json(event);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
}

// CREATE new event
export async function createEvent(req, res) {
  const event = req.body;
  const newEvent = new eventModel(event);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}