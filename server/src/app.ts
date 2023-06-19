import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import eventRoutes from "./routes/events";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import userRoutes from "./routes/user";
import session from "express-session";
import env from "./util/validateEnv";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
  })
);

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMassage = "Nieznany błąd";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMassage = error.message;
  }
  res.status(statusCode).json({ error: errorMassage });
});

export default app;
