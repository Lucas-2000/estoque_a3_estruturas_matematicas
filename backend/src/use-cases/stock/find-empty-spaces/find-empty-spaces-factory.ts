import { FindEmptySpacesController } from "./find-empty-spaces-controller";
import { StockRepository } from "../../../repositories/stock-repository";
import { FindEmptySpacesUseCase } from "./find-empty-spaces-use-case";

export const findEmptySpacesFactory = (stockRepository: StockRepository) => {
  const findEmptySpacesUseCase = new FindEmptySpacesUseCase(stockRepository);
  const findEmptySpacesController = new FindEmptySpacesController(
    findEmptySpacesUseCase
  );

  return findEmptySpacesController;
};
