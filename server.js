const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = 8000;
const PORT = process.env.PORT || 8000

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
