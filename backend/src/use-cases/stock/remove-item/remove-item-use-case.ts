import { CustomError } from "./../../../utils/custom-error";
import { StockRepository } from "../../../repositories/stock-repository";
import { ItemRepository } from "../../../repositories/item-repository";

interface RemoveItemRequest {
  sku: string;
}

type RemoveItemResponse = void | CustomError;

export class RemoveItemUseCase {
  constructor(
    private stockRepository: StockRepository,
    private itemRepository: ItemRepository
  ) {}

  async execute({ sku }: RemoveItemRequest): Promise<RemoveItemResponse> {
    const itemExists = await this.itemRepository.findBySku(sku);

    if (!itemExists) return new CustomError(true, "Item não encontrado", 404);

    await this.stockRepository.removeItem(sku);
  }
}
