import { Router, Request, Response } from "express";
import { createItemFactory } from "../use-cases/create/create-item-factory";
import { findAllItemsFactory } from "./../use-cases/find-all/find-all-items-factory";
import { InMemoryItemRepository } from "../repositories/in-memory/in-memory-item-repository";
import { updateItemFactory } from "./../use-cases/update/update-item-factory";
import { findItemBySkuFactory } from "../use-cases/find-by-sku/find-item-by-sku-factory";
import { deleteItemFactory } from "../use-cases/delete/delete-item-factory";

const itemRoutes = Router();

const itemRepository = new InMemoryItemRepository();

itemRoutes.post("/", (req: Request, res: Response) => {
  return createItemFactory(itemRepository).handle(req, res);
});

itemRoutes.get("/", (req: Request, res: Response) => {
  return findAllItemsFactory(itemRepository).handle(req, res);
});

itemRoutes.get("/:sku", (req: Request, res: Response) => {
  return findItemBySkuFactory(itemRepository).handle(req, res);
});

itemRoutes.put("/:sku", (req: Request, res: Response) => {
  return updateItemFactory(itemRepository).handle(req, res);
});

itemRoutes.delete("/:sku", (req: Request, res: Response) => {
  return deleteItemFactory(itemRepository).handle(req, res);
});

export { itemRoutes };
