import { RequestHandler } from "express";
import EventModel from "../models/event";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { assertIsDefined } from "../util/assertIsDefined";

export const getEvents: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    const events = await EventModel.find({
      userId: authenticatedUserId,
    }).exec();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const getEvent: RequestHandler = async (req, res, next) => {
  const eventId = req.params.eventId;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(eventId)) {
      throw createHttpError(400, "Invalid event Id");
    }
    const event = await EventModel.findById(eventId).exec();

    if (!event) {
      throw createHttpError(404, "Event not Found");
    }
    if (!event.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this event");
    }

    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

interface CreateEventBody {
  name: string;
  description?: string;
}

export const createEvent: RequestHandler<
  unknown,
  unknown,
  CreateEventBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!name) {
      throw createHttpError(400, "Event must have name");
    }
    const newEvent = await EventModel.create({
      userId: authenticatedUserId,
      name: name,
      description: description,
    });

    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

interface UpdateEventParams {
  eventId: string;
}

interface UpdateEventBody {
  name?: string;
  description?: string;
}

export const updateEvent: RequestHandler<
  UpdateEventParams,
  unknown,
  UpdateEventBody,
  unknown
> = async (req, res, next) => {
  const eventId = req.params.eventId;
  const newName = req.body.name;
  const newDrescription = req.body.description;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(eventId)) {
      throw createHttpError(400, "Invalid event Id");
    }
    if (!newName) {
      throw createHttpError(400, "Event must have name");
    }

    const event = await EventModel.findById(eventId).exec();
    if (!event) {
      throw createHttpError(404, "Event not Found");
    }
    if (!event.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this event");
    }
    event.name = newName;
    event.description = newDrescription;

    const updatedEvent = await event.save();

    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
};

export const deleteEvent: RequestHandler = async (req, res, next) => {
  const eventId = req.params.eventId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(eventId)) {
      throw createHttpError(400, "Invalid event Id");
    }
    const event = await EventModel.findById(eventId).exec();

    if (!event) {
      throw createHttpError(404, "Event not found");
    }
    if (!event.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this event");
    }

    await event.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
