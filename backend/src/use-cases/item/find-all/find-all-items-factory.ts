import { ItemRepository } from "../../../repositories/item-repository";
import { FindAllItemsController } from "./find-all-items-controller";
import { FindAllItemsUseCase } from "./find-all-items-use-case";

export const findAllItemsFactory = (itemRepository: ItemRepository) => {
  const findAllItemsUseCase = new FindAllItemsUseCase(itemRepository);
  const findAllItemsController = new FindAllItemsController(
    findAllItemsUseCase
  );

  return findAllItemsController;
};
