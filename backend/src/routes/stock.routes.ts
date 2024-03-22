import { Router, Request, Response } from "express";
import { InMemoryStockRepository } from "./../repositories/in-memory/in-memory-stock-repository";
import { addItemFactory } from "../use-cases/stock/add-item/add-item-factory";
import { itemRepository } from "./item.routes";
import { showStockFactory } from "../use-cases/stock/show/show-stock-factory";

const stockRoutes = Router();

const stockRepository = new InMemoryStockRepository();

stockRoutes.post("/", (req: Request, res: Response) => {
  return addItemFactory(stockRepository, itemRepository).handle(req, res);
});

stockRoutes.get("/", (req: Request, res: Response) => {
  return showStockFactory(stockRepository).handle(req, res);
});

export { stockRoutes };
