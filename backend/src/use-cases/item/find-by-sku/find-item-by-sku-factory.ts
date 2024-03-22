import { ItemRepository } from "../../../repositories/item-repository";
import { FindItemBySkuController } from "./find-item-by-sku-controller";
import { FindItemBySkuUseCase } from "./find-item-by-sku-use-case";

export const findItemBySkuFactory = (itemRepository: ItemRepository) => {
  const findItemBySkuUseCase = new FindItemBySkuUseCase(itemRepository);
  const findItemBySkuController = new FindItemBySkuController(
    findItemBySkuUseCase
  );

  return findItemBySkuController;
};
