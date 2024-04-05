import { Item } from "../../../entities/item";
import { StockRepository } from "./../../../repositories/stock-repository";
import { ItemRepository } from "./../../../repositories/item-repository";
import { CustomError } from "./../../../utils/custom-error";

interface AddItemRequest {
  item: Item;
  row: number;
  column: number;
}

type AddItemResponse = void | CustomError;

export class AddItemUseCase {
  constructor(
    private stockRepository: StockRepository,
    private itemRepository: ItemRepository
  ) {}

  async execute({
    item,
    row,
    column,
  }: AddItemRequest): Promise<AddItemResponse> {
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

    const itemIsAlreadyOnStock = await this.stockRepository.findItem(item.sku);

    if (itemIsAlreadyOnStock !== null)
      return new CustomError(true, "O item já está no estoque", 400);

    await this.stockRepository.addItem(item, row, column);
  }
}
