const express = require("express");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Page Not Found!" });
});

app.listen(4009);
