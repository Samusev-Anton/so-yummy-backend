const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/api/users");
const authRouter = require("./routes/api/currentUser");
const recipesRouter = require("./routes/api/recipes");
const ingredientsRouter = require("./routes/api/ingredients");
const popularRecipesRouter = require("./routes/api/popular");
const favorite = require("./routes/api/favorite");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/recipes/", recipesRouter);
app.use("/api/ingredients/", ingredientsRouter);
app.use("/api/popular/", popularRecipesRouter);
app.use("/api/favorite", favorite);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
