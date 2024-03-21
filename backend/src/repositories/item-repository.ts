import { Item } from "../entities/item";

export interface ItemRepository {
  create(item: Item): void;
  findAll(): Item[];
  findBySku(sku: string): Item | undefined;
  findIndex(sku: string): number;
  update(item: Item): void;
  delete(sku: string): void;
}
