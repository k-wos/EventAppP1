import express from "express";
import * as EventsController from "../controllers/events";

const router = express.Router();

router.get("/", EventsController.getEvents);
router.get("/:eventId", EventsController.getEvent);
router.post("/", EventsController.createEvent);
router.patch("/:eventId", EventsController.updateEvent);
router.delete("/:eventId", EventsController.deleteEvent);

export default router;
