import { ItemRepository } from "../../../repositories/item-repository";
import { StockRepository } from "../../../repositories/stock-repository";
import { AddItemController } from "./add-item-controller";
import { AddItemUseCase } from "./add-item-use-case";

export const addItemFactory = (
  stockRepository: StockRepository,
  itemRepository: ItemRepository
) => {
  const addItemUseCase = new AddItemUseCase(stockRepository, itemRepository);
  const addItemController = new AddItemController(addItemUseCase);

  return addItemController;
};
