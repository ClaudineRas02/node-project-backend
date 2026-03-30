const express = require("express");
const cors = require("cors");

const healthRouter = require("./routes/health");
const { notFoundHandler, errorHandler } = require("./middlewares/error");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
