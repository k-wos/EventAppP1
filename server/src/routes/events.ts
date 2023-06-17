import express from "express";
import * as EventsController from "../controllers/events";

const router = express.Router();

router.get("/", EventsController.getEvents);
router.post("/", EventsController.createEvent);

export default router;
