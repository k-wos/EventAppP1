import { RequestHandler } from "express";
import createHttpError from "http-errors";

interface SignUpBody {
  username?: string;
  email?: string;
  password: string;
}

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const passwardRaw = req.body.password;

  try {
    if (!username || !email || !passwardRaw) {
      throw createHttpError(400, "Parameters missing");
    }
  } catch (error) {
    next(error);
  }
};