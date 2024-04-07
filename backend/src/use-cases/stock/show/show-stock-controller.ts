import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";
import { ShowStockUseCase } from "./show-stock-use-case";

export class ShowStockController {
  constructor(private showStockUseCase: ShowStockUseCase) {}

  async handle(req: Request, res: Response) {
    const result = await this.showStockUseCase.execute();

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
