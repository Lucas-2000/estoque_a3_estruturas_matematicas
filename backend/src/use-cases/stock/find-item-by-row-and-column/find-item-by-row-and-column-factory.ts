import { StockRepository } from "../../../repositories/stock-repository";
import { FindItemByRowAndColumnController } from "./find-item-by-row-and-column-controller";
import { FindItemByRowAndColumnUseCase } from "./find-item-by-row-and-column-use-case";

export const findItemByRowAndColumnFactory = (
  stockRepository: StockRepository
) => {
  const findItemByRowAndColumnUseCase = new FindItemByRowAndColumnUseCase(
    stockRepository
  );
  const findItemByRowAndColumnController = new FindItemByRowAndColumnController(
    findItemByRowAndColumnUseCase
  );

  return findItemByRowAndColumnController;
};
