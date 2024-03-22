import { Item } from "../../../entities/item";
import { ItemRepository } from "../../../repositories/item-repository";
import { CustomError } from "../../../utils/custom-error";

interface FindItemBySkuRequest {
  sku: string;
}

type FindItemBySkuResponse = Item | CustomError;

export class FindItemBySkuUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({ sku }: FindItemBySkuRequest): Promise<FindItemBySkuResponse> {
    const item = await this.itemRepository.findBySku(sku);

    if (!item) return new CustomError(true, "Item não encontrado", 400);

    return item;
  }
}
