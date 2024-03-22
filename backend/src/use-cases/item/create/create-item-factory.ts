import { ItemRepository } from "../../../repositories/item-repository";
import { CreateItemController } from "./create-item-controller";
import { CreateItemUseCase } from "./create-item-use-case";

export const createItemFactory = (itemRepository: ItemRepository) => {
  const createItemUseCase = new CreateItemUseCase(itemRepository);
  const createItemController = new CreateItemController(createItemUseCase);

  return createItemController;
};
