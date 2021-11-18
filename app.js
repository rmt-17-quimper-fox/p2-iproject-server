const axios = require("axios");
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
app.post("/register", Controller.register);
app.post("/login", Controller.login);

app.get("/status-covid", Controller.getCovidInformation);

app.use(Authenticate);
app.get("/task", Controller.getTasks);
app.post("/task", Controller.postTask);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
