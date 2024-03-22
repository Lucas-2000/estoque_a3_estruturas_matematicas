import { ItemRepository } from "../../../repositories/item-repository";
import { CustomError } from "../../../utils/custom-error";

interface DeleteItemRequest {
  sku: string;
}

type DeleteItemResponse = void | CustomError;

export class DeleteItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({ sku }: DeleteItemRequest): Promise<DeleteItemResponse> {
    const item = await this.itemRepository.findBySku(sku);

    if (!item) return new CustomError(true, "Item não encontrado", 400);

    await this.itemRepository.delete(sku);
  }
}
