import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import eventRoutes from "./routes/events";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/events", eventRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMassage = "Nieznany błąd";
  if (error instanceof Error) errorMassage = error.message;
  res.status(500).json({ error: errorMassage });
});

export default app;
