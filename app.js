const cors = require("cors")
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const Controllers = require('./controllers/controller')
const ControllerApi = require('./api/controllerApi')
const app = express()
const port = process.env.PORT || 3000
const authentication = require('./middleware/authentication')
const {authorization, auth_getdata} = require('./middleware/authorization')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/register', Controllers.register)
app.post('/login', Controllers.login)
app.post('/google-signin', Controllers.googleSignin)
app.get('/get-news', ControllerApi.getNews)
app.get('/get-charts', ControllerApi.getCharts)
app.use(authentication)
app.post('/new-patients', Controllers.newPatient)
app.delete('/patients/:id', authorization, Controllers.deletePatient)
app.put('/patients/:id', authorization, Controllers.updatePatient)
app.get('/patients-details/:id', authorization, ControllerApi.uploadData)
app.get('/patients', auth_getdata, Controllers.readPatient)
app.get('/patients/:id', auth_getdata, Controllers.readPatientDetail)





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})