const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");

const brandsRouter = require("./routes/brands");
app.use("/brands", brandsRouter);
const colorsRouter = require("./routes/colors");
app.use("/colors", colorsRouter);
// const productsRouter = require("./routes/Products");
// app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("server is running");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
