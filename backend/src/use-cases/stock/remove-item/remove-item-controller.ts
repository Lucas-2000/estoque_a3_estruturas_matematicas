import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";
import { RemoveItemUseCase } from "./remove-item-use-case";

export class RemoveItemController {
  constructor(private removeItemUseCase: RemoveItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { sku } = req.params;

    const result = await this.removeItemUseCase.execute({
      sku,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json({ message: "Item removido com sucesso!" });
  }
}
