import { ItemRepository } from "../../repositories/item-repository";
import { UpdateItemController } from "./update-items-controller";
import { UpdateItemUseCase } from "./update-items-use-case";

export const updateItemFactory = (itemRepository: ItemRepository) => {
  const updateItemUseCase = new UpdateItemUseCase(itemRepository);
  const updateItemController = new UpdateItemController(updateItemUseCase);

  return updateItemController;
};
