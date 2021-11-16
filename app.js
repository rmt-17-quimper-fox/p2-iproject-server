// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
// const express = require("express");
// const cors = require("cors");
// const routes = require("./routes");
// const app = express();
// const port = process.env.PORT || 3000;


const { User } = require("./models");

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

User.create({ email: "user@mail.com", password: "user1" })
.then(response=>{console.log(response);})
.catch(response=>{console.log(response);})

// app.use(routes);

// app.get("/", (req, res) => {
//   res.send("Welcome To Binge Buddy!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
