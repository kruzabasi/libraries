const express = require("express");
const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: "Richest Man in Babylon",
      genre: "Finance",
      author: "Alfred Hunter",
      read: false
    },
    {
      title: "His Dark Materials",
      genre: "Fiction",
      author: "Rick Banning",
      read: false
    },
    {
      title: "Half of a Yellow Sun",
      genre: "Folk",
      author: "Chiwetele Ejiofor",
      read: false
    },
    {
      title: "War Crimes",
      genre: "Docmentary",
      author: "Tokoyami Obanai",
      read: false
    },
    {
      title: "Naked Forex",
      genre: "Finance",
      author: "Don Corleon",
      read: false
    },
    {
      title: "Evil Forest",
      genre: "Fiction",
      author: "Ada Obubu",
      read: false
    },
    {
      title: "War and Peace",
      genre: "Folk",
      author: "Lev Nikolayevich Tolstoy",
      read: false
    },
    {
      title: "Les Misreables",
      genre: "Fantasy",
      author: "Victor Hugo",
      read: false
    },
    {
      title: "The Dark World",
      genre: "Fiction",
      author: "Henry Kutner",
      read: false
    },
    {
      title: "The Time Machine",
      genre: "Fiction",
      author: "H. G. Wells",
      read: false
    },
    {
      title: "Wind in The Willows",
      genre: "Fantasy",
      author: "Kenneth Grahame",
      read: false
    },
    { title: "African Giant", genre: "Folk", author: "Burna Boy", read: false }
  ];

  bookRouter.route("/").get((req, res) => {
    res.render("books", {
      nav,
      title: "Library",
      books
    });
  });
  bookRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("bookView", {
      nav,
      title: "Library",
      book: books[id]
    });
  });
  return bookRouter;
}

module.exports = router;
