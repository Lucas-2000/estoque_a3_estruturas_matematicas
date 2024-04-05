import { FindItemByRowAndColumnUseCase } from "./find-item-by-row-and-column-use-case";
import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";

export class FindItemByRowAndColumnController {
  constructor(
    private findItemByRowAndColumnUseCase: FindItemByRowAndColumnUseCase
  ) {}

  async handle(req: Request, res: Response) {
    const { row, column } = req.params;

    const result = await this.findItemByRowAndColumnUseCase.execute({
      row: Number(row),
      column: Number(column),
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
