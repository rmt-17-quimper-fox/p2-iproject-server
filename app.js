const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express");
const Controller = require("./controllers/controller");
const { Authenticate } = require("./middlewares/auth");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;
// const router = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(router);
app.post("/login", Controller.login);
app.post("/register", Controller.register);

app.get("/covid-in-indonesia", async (req, res, next) => {
  axios({
    method: "GET",
    url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi",
  })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.use(Authenticate);
app.get("/task", Controller.getTasks);
app.post("/task");
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
