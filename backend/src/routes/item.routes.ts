import { updateItemFactory } from "./../use-cases/item/update/update-item-factory";
import { findItemBySkuFactory } from "./../use-cases/item/find-by-sku/find-item-by-sku-factory";
import { findAllItemsFactory } from "./../use-cases/item/find-all/find-all-items-factory";
import { createItemFactory } from "./../use-cases/item/create/create-item-factory";
import { deleteItemFactory } from "./../use-cases/item/delete/delete-item-factory";
import { Router, Request, Response } from "express";
import { InMemoryItemRepository } from "../repositories/in-memory/in-memory-item-repository";

const itemRoutes = Router();

export const itemRepository = new InMemoryItemRepository();

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
