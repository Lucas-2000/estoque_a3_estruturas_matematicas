import { Request, Response } from "express";
import { UpdateItemUseCase } from "./update-items-use-case";
import { CustomError } from "../../../utils/custom-error";

export class UpdateItemController {
  constructor(private updateItemUseCase: UpdateItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { sku } = req.params;
    const { lot, name, price, weight } = req.body;

    const result = await this.updateItemUseCase.execute({
      sku,
      lot,
      name,
      price,
      weight,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json({ message: "Item atualizado com sucesso!" });
  }
}
