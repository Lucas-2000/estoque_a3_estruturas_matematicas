import { FindItemUseCase } from "./find-item-use-case";
import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";

export class FindItemController {
  constructor(private findItemUseCase: FindItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { sku } = req.params;

    const result = await this.findItemUseCase.execute({
      sku,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
