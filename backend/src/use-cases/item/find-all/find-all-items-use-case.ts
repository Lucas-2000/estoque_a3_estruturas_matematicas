import { Item } from "../../../entities/item";
import { ItemRepository } from "../../../repositories/item-repository";

type FindAllItemsResponse = Item[];

export class FindAllItemsUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(): Promise<FindAllItemsResponse> {
    return await this.itemRepository.findAll();
  }
}
