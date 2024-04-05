import { ItemRepository } from "../../../repositories/item-repository";
import { StockRepository } from "../../../repositories/stock-repository";
import { FindItemController } from "./find-item-controller";
import { FindItemUseCase } from "./find-item-use-case";

export const findItemFactory = (
  stockRepository: StockRepository,
  itemRepository: ItemRepository
) => {
  const findItemUseCase = new FindItemUseCase(stockRepository, itemRepository);
  const findItemController = new FindItemController(findItemUseCase);

  return findItemController;
};
