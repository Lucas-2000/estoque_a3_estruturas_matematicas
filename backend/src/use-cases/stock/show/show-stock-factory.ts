import { StockRepository } from "../../../repositories/stock-repository";
import { ShowStockController } from "./show-stock-controller";
import { ShowStockUseCase } from "./show-stock-use-case";

export const showStockFactory = (stockRepository: StockRepository) => {
  const showStockUseCase = new ShowStockUseCase(stockRepository);
  const showStockController = new ShowStockController(showStockUseCase);

  return showStockController;
};
