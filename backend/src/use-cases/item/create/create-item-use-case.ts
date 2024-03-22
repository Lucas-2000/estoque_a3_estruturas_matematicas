import { CustomError } from "../../../utils/custom-error";
import { ItemRepository } from "../../../repositories/item-repository";
import { Item } from "../../../entities/item";

interface CreateItemRequest {
  name: string;
  price: number;
  weight: number;
}

type CreateItemResponse = void | CustomError;

export class CreateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({
    name,
    price,
    weight,
  }: CreateItemRequest): Promise<CreateItemResponse> {
    const item = new Item();
    item.name = name;
    item.price = price;
    item.weight = weight;

    const skuExists = await this.itemRepository.findBySku(item.sku);

    if (skuExists) return new CustomError(true, "Sku já existe", 400);

    await this.itemRepository.create(item);
  }
}
