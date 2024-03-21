import { Item } from "../entities/item";

export interface ItemRepository {
  create(item: Item): Promise<void>;
  findAll(): Promise<Item[]>;
  findBySku(sku: string): Promise<Item | undefined>;
  findIndex(sku: string): Promise<number>;
  update(item: Item): Promise<void>;
  delete(sku: string): Promise<void>;
}
