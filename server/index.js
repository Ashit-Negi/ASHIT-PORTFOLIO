const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./contactRoutes");

const app = express();
const port = process.env.PORT || 7000;
console.log(port);

// middlewares
app.use(cors());
app.use(express.json());

//ContactRoutes
app.use("/contact", contactRoutes);
console.log("contact routes loaded");

app.listen(port, () => {
  console.log(`sever is running on ${port}`);
});
