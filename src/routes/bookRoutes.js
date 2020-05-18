const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controller/bookController");

function router(nav) {
  const { getIndex, getByID, middleware } = bookController(nav);
  bookRouter.use(middleware);
  bookRouter.route("/").get(getIndex);

  bookRouter.route("/:id").get(getByID);
  return bookRouter;
}

module.exports = router;
