import { Item } from "../../entities/item";
import { StockRepository } from "../stock-repository";

export class InMemoryStockRepository implements StockRepository {
  private stock: (Item | null)[][];

  constructor() {
    this.stock = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => null)
    );
  }

  async addItem(item: Item, row: number, column: number): Promise<void> {
    this.stock[row][column] = item;
  }

  async removeItem(item: Item): Promise<void> {
    for (let i = 0; i < this.stock.length; i++) {
      for (let j = 0; j < this.stock[i].length; j++) {
        if (this.stock[i][j] === item) {
          this.stock[i][j] = null;
          return;
        }
      }
    }
  }

  async moveItem(item: Item, row: number, column: number): Promise<void> {
    for (let i = 0; i < this.stock.length; i++) {
      for (let j = 0; j < this.stock[i].length; j++) {
        if (this.stock[i][j] === item) {
          this.stock[i][j] = null;
        }
      }
    }
    this.stock[row][column] = item;
  }

  async findItem(item: Item): Promise<Item | null> {
    for (let i = 0; i < this.stock.length; i++) {
      for (let j = 0; j < this.stock[i].length; j++) {
        if (this.stock[i][j] === item) {
          return item;
        }
      }
    }
    return null;
  }

  async findByRowAndColumn(row: number, column: number): Promise<Item | null> {
    return this.stock[row][column];
  }

  async findEmptySpaces(): Promise<{ row: number; column: number }[]> {
    const emptySpaces: { row: number; column: number }[] = [];

    for (let i = 0; i < this.stock.length; i++) {
      for (let j = 0; j < this.stock[i].length; j++) {
        if (this.stock[i][j] === null) {
          emptySpaces.push({ row: i, column: j });
        }
      }
    }

    return emptySpaces;
  }

  async isEmptySpace(row: number, column: number): Promise<boolean> {
    return this.stock[row][column] === null;
  }

  async show(): Promise<(Item | null)[][]> {
    return this.stock;
  }
}
