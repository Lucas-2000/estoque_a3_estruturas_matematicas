import { CustomError } from "../../utils/custom-error";
import { Request, Response } from "express";
import { FindAllItemsUseCase } from "./find-all-items-use-case";

export class FindAllItemsController {
  constructor(private findAllItemsUseCase: FindAllItemsUseCase) {}

  async handle(req: Request, res: Response) {
    const result = await this.findAllItemsUseCase.execute();

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
