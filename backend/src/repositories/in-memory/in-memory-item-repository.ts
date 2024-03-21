import { Item } from "../../entities/item";
import { ItemRepository } from "../item-repository";

export class InMemoryItemRepository implements ItemRepository {
  private items: Item[] = [];

  async create(item: Item): Promise<void> {
    this.items.push(item);
  }

  async findAll(): Promise<Item[]> {
    return this.items;
  }

  async findBySku(sku: string): Promise<Item | undefined> {
    return this.items.find((item) => item.sku === sku);
  }

  async findIndex(sku: string): Promise<number> {
    const index = this.items.findIndex((obj) => obj.sku === sku);

    if (index < 0) return -1;

    return index;
  }

  async update(item: Item): Promise<void> {
    const itemToUpdate = this.items.find((i) => i.sku === item.sku);

    if (itemToUpdate !== undefined) {
      Object.assign(itemToUpdate, item);
    }
  }

  async delete(sku: string): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.sku === sku);

    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
