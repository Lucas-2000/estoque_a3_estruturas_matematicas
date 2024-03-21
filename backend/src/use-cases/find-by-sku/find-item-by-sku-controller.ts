import { CustomError } from "../../utils/custom-error";
import { Request, Response } from "express";
import { FindItemBySkuUseCase } from "./find-item-by-sku-use-case";

export class FindItemBySkuController {
  constructor(private findItemBySkuUseCase: FindItemBySkuUseCase) {}

  async handle(req: Request, res: Response) {
    const { sku } = req.params;

    const result = await this.findItemBySkuUseCase.execute({
      sku,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json(result);
  }
}
