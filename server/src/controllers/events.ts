import { RequestHandler } from "express";
import EventModel from "../models/event";

export const getEvents: RequestHandler = async (req, res, next) => {
  try {
    const events = await EventModel.find().exec();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const createEvent: RequestHandler = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  try {
    const newEvent = await EventModel.create({
      name: name,
      description: description,
    });

    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};
