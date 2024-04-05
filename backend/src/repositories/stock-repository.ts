import { Item } from "../entities/item";

export interface ItemPosition {
  row: number;
  column: number;
}

export interface StockRepository {
  addItem(item: Item, row: number, column: number): Promise<void>;
  removeItem(sku: string): Promise<void>;
  moveItem(item: Item, row: number, column: number): Promise<void>;
  findItem(sku: string): Promise<{ item: Item; position: ItemPosition } | null>;
  findByRowAndColumn(row: number, column: number): Promise<Item | null>;
  findEmptySpaces(): Promise<{ row: number; column: number }[]>;
  isEmptySpace(row: number, column: number): Promise<boolean>;
  isValidInterval(row: number, column: number): Promise<boolean>;
  show(): Promise<(Item | null)[][]>;
}
