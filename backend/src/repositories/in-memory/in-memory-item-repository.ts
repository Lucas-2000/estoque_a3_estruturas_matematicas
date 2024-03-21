import { Item } from "../../entities/item";
import { ItemRepository } from "../item-repository";

export class InMemoryItemRepository implements ItemRepository {
  private items: Item[] = [];

  create(item: Item): void {
    this.items.push(item);
  }

  findAll(): Item[] {
    return this.items;
  }

  findBySku(sku: string): Item | undefined {
    return this.items.find((item) => item.sku === sku);
  }

  findIndex(sku: string): number {
    const index = this.items.findIndex((obj) => obj.sku === sku);

    if (index < 0) return -1;

    return index;
  }

  update(item: Item): void {
    const itemToUpdate = this.items.find((i) => i.sku === item.sku);

    if (itemToUpdate !== undefined) {
      Object.assign(itemToUpdate, item);
    }
  }

  delete(sku: string): void {
    const itemIndex = this.items.findIndex((item) => item.sku === sku);

    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
