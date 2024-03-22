import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";
import { AddItemUseCase } from "./add-item-use-case";

export class AddItemController {
  constructor(private addItemUseCase: AddItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { item, row, column } = req.body;

    const result = await this.addItemUseCase.execute({
      item,
      row,
      column,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(200).json({ message: "Item adicionado com sucesso!" });
  }
}
