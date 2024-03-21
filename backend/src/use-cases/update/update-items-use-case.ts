import { Item } from "../../entities/item";
import { ItemRepository } from "../../repositories/item-repository";
import { CustomError } from "../../utils/custom-error";

interface UpdateItemRequest {
  sku: string;
  lot: string;
  name: string;
  price: number;
  weight: number;
}

type UpdateItemResponse = void | CustomError;

export class UpdateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({
    sku,
    lot,
    name,
    price,
    weight,
  }: UpdateItemRequest): Promise<UpdateItemResponse> {
    const index = await this.itemRepository.findIndex(sku);

    if (index < 0) return new CustomError(true, "Item não encontrado", 400);

    const itemExists = await this.itemRepository.findBySku(sku);

    if (!itemExists) return new CustomError(true, "Item não encontrado", 400);

    const item = new Item();
    item.sku = sku;
    item.lot = lot;
    item.name = name;
    item.price = price;
    item.weight = weight;

    await this.itemRepository.update(item);
  }
}
