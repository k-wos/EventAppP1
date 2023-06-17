import "dotenv/config";
import express from "express";
import EventModel from "./models/event";

const app = express();

app.get("/", async (req, res) => {
  try {
    const events = await EventModel.find().exec();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    let errorMassage = "Nieznany błąd";
    if (error instanceof Error) errorMassage = error.message;
    res.status(500);
  }
});

export default app;
