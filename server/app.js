const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("lalallaand");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
