const { Router } = require("express");

const book = require("./app/controllers/BooksController");

const routes = new Router();

// Users
routes.get("/show-book/:isbn", book.show);
routes.post("/create-book", book.create);
routes.put("/update-book/:isbn", book.update);
routes.delete("/delete-book/:isbn", book.destroy);

module.exports = routes;
