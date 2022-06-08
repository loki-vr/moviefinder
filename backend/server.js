const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const routeNotFoundJsonHandler = require("./services/routeNotFoundJsonHandler");
const jsonErrorHandler = require("./services/jsonErrorHandler");

const moviesRouter = require("./routes/movies");
const genresRouter = require("./routes/genres");
//const populateRouter = require("./routes/dev-populate");

mongoose.connect(process.env.MONGO_DB_URL);

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);
app.use("/genres", genresRouter);
//app.use("/populate", populateRouter);

// Register 404 middleware and error handler
app.use(routeNotFoundJsonHandler); // this middleware must be registered after all routes to handle 404 correctly
app.use(jsonErrorHandler); // this error handler must be registered after all middlewares to catch all errors

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
