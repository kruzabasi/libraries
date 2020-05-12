const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

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
  { title: "Evil Forest", genre: "Fiction", author: "Ada Obubu", read: false },
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
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" }
    ],
    title: "Library",
    books
  });
});
bookRouter.route("/single").get((req, res) => {
  res.send("hello single book");
});

app.use("/books", bookRouter);
app.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" }
    ],
    title: "Library"
  });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
