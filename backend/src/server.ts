import express from "express";
import "express-async-errors";
import { itemRoutes } from "./routes/item.routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.use("/items", itemRoutes);

app.use(errorHandler);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
