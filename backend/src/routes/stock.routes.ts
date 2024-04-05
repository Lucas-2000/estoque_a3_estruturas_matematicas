import { findItemFactory } from "./../use-cases/stock/find-item/find-item-factory";
import { moveItemFactory } from "./../use-cases/stock/move-item/move-item-factory";
import { removeItemFactory } from "./../use-cases/stock/remove-item/remove-item-factory";
import { Router, Request, Response } from "express";
import { InMemoryStockRepository } from "./../repositories/in-memory/in-memory-stock-repository";
import { addItemFactory } from "../use-cases/stock/add-item/add-item-factory";
import { itemRepository } from "./item.routes";
import { showStockFactory } from "../use-cases/stock/show/show-stock-factory";
import { findItemByRowAndColumnFactory } from "../use-cases/stock/find-item-by-row-and-column/find-item-by-row-and-column-factory";

const stockRoutes = Router();

const stockRepository = new InMemoryStockRepository();

stockRoutes.post("/", (req: Request, res: Response) => {
  return addItemFactory(stockRepository, itemRepository).handle(req, res);
});

stockRoutes.get("/", (req: Request, res: Response) => {
  return showStockFactory(stockRepository).handle(req, res);
});

stockRoutes.delete("/:sku", (req: Request, res: Response) => {
  return removeItemFactory(stockRepository, itemRepository).handle(req, res);
});

stockRoutes.post("/move", (req: Request, res: Response) => {
  return moveItemFactory(stockRepository, itemRepository).handle(req, res);
});

stockRoutes.get("/:sku", (req: Request, res: Response) => {
  return findItemFactory(stockRepository, itemRepository).handle(req, res);
});

stockRoutes.get("/row/:row/column/:column", (req: Request, res: Response) => {
  return findItemByRowAndColumnFactory(stockRepository).handle(req, res);
});

export { stockRoutes };
