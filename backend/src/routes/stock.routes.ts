import { Router, Request, Response } from "express";
import { InMemoryStockRepository } from "./../repositories/in-memory/in-memory-stock-repository";
import { addItemFactory } from "../use-cases/stock/add-item/add-item-factory";
import { itemRepository } from "./item.routes";

const stockRoutes = Router();

const stockRepository = new InMemoryStockRepository();

stockRoutes.post("/", (req: Request, res: Response) => {
  return addItemFactory(stockRepository, itemRepository).handle(req, res);
});

export { stockRoutes };
