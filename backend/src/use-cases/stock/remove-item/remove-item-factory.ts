import { ItemRepository } from "../../../repositories/item-repository";
import { StockRepository } from "../../../repositories/stock-repository";
import { RemoveItemController } from "./remove-item-controller";
import { RemoveItemUseCase } from "./remove-item-use-case";

export const removeItemFactory = (
  stockRepository: StockRepository,
  itemRepository: ItemRepository
) => {
  const removeItemUseCase = new RemoveItemUseCase(
    stockRepository,
    itemRepository
  );
  const removeItemController = new RemoveItemController(removeItemUseCase);

  return removeItemController;
};
