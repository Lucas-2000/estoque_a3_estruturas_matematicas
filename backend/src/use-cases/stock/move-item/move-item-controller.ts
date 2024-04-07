import { CustomError } from "../../../utils/custom-error";
import { Request, Response } from "express";
import { MoveItemUseCase } from "./move-item-use-case";

export class MoveItemController {
  constructor(private moveItemUseCase: MoveItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { item, row, column } = req.body;

    const result = await this.moveItemUseCase.execute({
      item,
      row,
      column,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res
      .status(200)
      .json({
        message: `Item movido com sucesso para linha ${row} e coluna ${column}!`,
      });
  }
}
