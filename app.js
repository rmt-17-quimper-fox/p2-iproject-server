const express = require('express')
const app = express()
const port = proccess.env.PORT || 3000
const cors = require("cors")
const Controller = require('./controllers/controller')
const authentication = require('./middlewares/authentication')
const getFile = require('./middlewares/multer')
const uploadImageToDrive = require('./middlewares/uploadGdrive')
const orderHandler = require('./middlewares/authorization')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/register', Controller.postRegister)
app.post('/login', Controller.postLogin)
app.post('/googlelogin', Controller.googleLogin)

app.use(authentication)

app.get('/news', Controller.getNews)
app.get('/category', Controller.renderCategories)
app.post('/order', getFile, uploadImageToDrive, Controller.postOrder)
app.get('/order/:id', orderHandler, Controller.showOrderById)
app.post('/pay', Controller.paypal)
app.get('/success', Controller.paymentSuccess)


app.listen(port, () => console.log(`App running on port ${port}`))