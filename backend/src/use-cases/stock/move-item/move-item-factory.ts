import { ItemRepository } from "../../../repositories/item-repository";
import { StockRepository } from "../../../repositories/stock-repository";
import { MoveItemController } from "./move-item-controller";
import { MoveItemUseCase } from "./move-item-use-case";

export const moveItemFactory = (
  stockRepository: StockRepository,
  itemRepository: ItemRepository
) => {
  const moveItemUseCase = new MoveItemUseCase(stockRepository, itemRepository);
  const moveItemController = new MoveItemController(moveItemUseCase);

  return moveItemController;
};
