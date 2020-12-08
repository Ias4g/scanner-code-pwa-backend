import { Router } from "express";

import book from "./app/controllers/BooksController";

const routes = new Router();

// Users
routes.get("/show-book/:isbn", book.show);
routes.post("/create-book", book.create);
routes.put("/update-book/:isbn", book.update);
routes.delete("/delete-book/:isbn", book.destroy);

export default routes;
