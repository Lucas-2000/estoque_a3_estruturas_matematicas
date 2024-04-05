import { Item } from "../../../entities/item";
import { StockRepository } from "./../../../repositories/stock-repository";
import { ItemRepository } from "./../../../repositories/item-repository";
import { CustomError } from "./../../../utils/custom-error";

interface MoveItemRequest {
  item: Item;
  row: number;
  column: number;
}

type MoveItemResponse = void | CustomError;

export class MoveItemUseCase {
  constructor(
    private stockRepository: StockRepository,
    private itemRepository: ItemRepository
  ) {}

  async execute({
    item,
    row,
    column,
  }: MoveItemRequest): Promise<MoveItemResponse> {
    const itemExists = await this.itemRepository.findBySku(item.sku);

    if (!itemExists) return new CustomError(true, "Item não encontrado", 404);

    const isValidInterval = await this.stockRepository.isValidInterval(
      row,
      column
    );

    if (!isValidInterval)
      return new CustomError(true, "O intervalo inserido não é valido", 400);

    const isEmpty = await this.stockRepository.isEmptySpace(row, column);

    if (!isEmpty)
      return new CustomError(true, "O espaço inserido já possui um item", 400);

    await this.stockRepository.moveItem(item, row, column);

    await this.stockRepository.removeItem(item.sku);
  }
}
