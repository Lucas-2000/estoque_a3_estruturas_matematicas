import { CustomError } from "./../../../utils/custom-error";
import {
  ItemPosition,
  StockRepository,
} from "../../../repositories/stock-repository";
import { ItemRepository } from "../../../repositories/item-repository";
import { Item } from "../../../entities/item";

interface FindItemRequest {
  sku: string;
}

type FindItemResponse =
  | { item: Item; position: ItemPosition }
  | null
  | CustomError;

export class FindItemUseCase {
  constructor(
    private stockRepository: StockRepository,
    private itemRepository: ItemRepository
  ) {}

  async execute({ sku }: FindItemRequest): Promise<FindItemResponse> {
    const itemExists = await this.itemRepository.findBySku(sku);

    if (!itemExists) return new CustomError(true, "Item não encontrado", 404);

    const findItem = await this.stockRepository.findItem(sku);

    return findItem;
  }
}
