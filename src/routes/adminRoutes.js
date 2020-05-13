const express = require("express");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:adminRoutes");

const adminRouter = express.Router();

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

function router(nav) {
  adminRouter.route("/").get((req, res) => {
    const url = "mongodb://localhost:27017";
    const dbName = "libraryApp";

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug("client connected successfully");
        const db = client.db(dbName);
        const response = await db.collection("books").insertMany(books);
        res.json(response);
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    })();
  });
  return adminRouter;
}
module.exports = router;
