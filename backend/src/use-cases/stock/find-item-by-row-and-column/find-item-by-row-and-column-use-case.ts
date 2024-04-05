import { CustomError } from "./../../../utils/custom-error";
import { StockRepository } from "../../../repositories/stock-repository";
import { Item } from "../../../entities/item";

interface FindItemByRowAndColumnRequest {
  row: number;
  column: number;
}

type FindItemByRowAndColumnResponse = Item | null | CustomError;

export class FindItemByRowAndColumnUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute({
    row,
    column,
  }: FindItemByRowAndColumnRequest): Promise<FindItemByRowAndColumnResponse> {
    const isValidInterval = await this.stockRepository.isValidInterval(
      row,
      column
    );

    if (!isValidInterval)
      return new CustomError(true, "O intervalo inserido não é valido", 400);

    const item = await this.stockRepository.findByRowAndColumn(row, column);

    return item;
  }
}
