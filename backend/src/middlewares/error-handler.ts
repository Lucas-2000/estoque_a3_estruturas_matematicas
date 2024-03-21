import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom-error";

export const errorHandler = (
  err: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError && err.error === false) {
    return res.status(err.statusCode).json({ error: err.description });
  }

  const internalErrorResponse = new CustomError(
    false,
    "Erro interno: " + err,
    500
  );
  return res.status(500).json(internalErrorResponse);
};
