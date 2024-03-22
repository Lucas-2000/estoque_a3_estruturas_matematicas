import { Item } from "../entities/item";

export interface StockRepository {
  addItem(item: Item, row: number, column: number): Promise<void>;
  removeItem(item: Item): Promise<void>;
  moveItem(item: Item, row: number, column: number): Promise<void>;
  findItem(item: Item): Promise<Item | null>;
  findByRowAndColumn(row: number, column: number): Promise<Item | null>;
  findEmptySpaces(): Promise<{ row: number; column: number }[]>;
  isEmptySpace(row: number, column: number): Promise<boolean>;
  show(): Promise<(Item | null)[][]>;
}
