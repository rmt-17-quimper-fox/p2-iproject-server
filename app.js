if (process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const express = require('express')
const cors = require("cors");
const routes = require("./routes");
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {res.send('Welcome To Binge Buddy!')})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})