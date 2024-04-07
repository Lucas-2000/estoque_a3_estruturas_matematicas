import { Item } from "../../../entities/item";
import { StockRepository } from "../../../repositories/stock-repository";

type ShowStockResponse = (Item | null)[][];

export class ShowStockUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute(): Promise<ShowStockResponse> {
    const stock = await this.stockRepository.show();
    return stock;
  }
}
