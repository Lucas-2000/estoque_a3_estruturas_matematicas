import { CustomError } from "../../utils/custom-error";
import { CreateItemUseCase } from "./create-item-use-case";
import { Request, Response } from "express";

export class CreateItemController {
  constructor(private createItemUseCase: CreateItemUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, price, weight } = req.body;

    const result = await this.createItemUseCase.execute({
      name,
      price,
      weight,
    });

    if (result instanceof CustomError && result.error === true) {
      return res.status(result.statusCode).json({ error: result.description });
    }

    return res.status(201).json({ message: "Item criado com sucesso!" });
  }
}
