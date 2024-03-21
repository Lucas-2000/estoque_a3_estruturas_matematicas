import { CustomError } from "../../utils/custom-error";
import { Request, Response } from "express";
import { DeleteItemUseCase } from "./delete-item-use-case";

export class DeleteItemController {
  constructor(private deleteItemUseCase: DeleteItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { sku } = req.params;

    const result = await this.deleteItemUseCase.execute({
      sku,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json({ message: "Item deletado com sucesso!" });
  }
}
