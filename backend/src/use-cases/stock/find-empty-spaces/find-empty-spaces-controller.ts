import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";
import { FindEmptySpacesUseCase } from "./find-empty-spaces-use-case";

export class FindEmptySpacesController {
  constructor(private findEmptySpacesUseCase: FindEmptySpacesUseCase) {}

  async handle(req: Request, res: Response) {
    const result = await this.findEmptySpacesUseCase.execute();

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
