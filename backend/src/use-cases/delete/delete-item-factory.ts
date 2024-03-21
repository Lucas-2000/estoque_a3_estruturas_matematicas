import { ItemRepository } from "../../repositories/item-repository";
import { DeleteItemController } from "./delete-item-controller";
import { DeleteItemUseCase } from "./delete-item-use-case";

export const deleteItemFactory = (itemRepository: ItemRepository) => {
  const deleteItemUseCase = new DeleteItemUseCase(itemRepository);
  const deleteItemController = new DeleteItemController(deleteItemUseCase);

  return deleteItemController;
};
