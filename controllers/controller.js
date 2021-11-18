const axios = require('axios')
const { comparePassword, jwtSign } = require('../helpers/helper')
const {User, Category, Order} = require('../models')
const { OAuth2Client } = require('google-auth-library')
const clientId = "979459015479-lufji34ucml3sb057u1srga7bshrfrid.apps.googleusercontent.com"
const client = new OAuth2Client(clientId)
const paypal = require('paypal-rest-sdk')
const nodemailer = require('nodemailer')

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AY7T3WHKkYIQEdesON8gdEcR6kTq1BYgzjSGTItnk9Yt_Bv4SER9LAQ-3Ecwes5f8f-lIzlhW2FrMxSI',
    'client_secret': 'ELEkDgcu5rWI_pZ9uGhLNRmPbp8AozytCXeyeVkgzidu7ZHCdJio1L2sGDBnIjxlcQLuVluHAsrSNnAk'
  });

class Controller {
    static async postRegister (req,res,next) {
        try {
            const {email, password} = req.body
            if(!req.body.email){
                throw('mailnotfound')
            } else if(!req.body.password){
                throw('passnotfound')
            }

            let response = await User.create({email, password})
            res.status(201).json({
                message: `Success registered ${response.email}`
            })
        } 
        catch (err) {
            next(err)
        }
    }

    static async postLogin (req,res,next){
        try {
            const {email, password} = req.body
            if(!req.body.email){
                throw ('mailnotfound')
            } else if(!req.body.password){
                throw('passnotfound')
            }

            let response = await User.findOne({
                where: {email}
            })
            if(response && comparePassword(password, response.password)){
                const access_token = jwtSign({
                    id: response.id,
                    email: response.email
                })
                res.status(200).json({
                    message: `Welcome to ZERO ${response.email} !`,
                    access_token: access_token
                })
            }
            else{
                throw('invalidlogin')
            }
        } 
        catch (err) {
            next(err)
        }
    }

    static async googleLogin(req,res,next){
        try {
            const {id_token} = req.body
            const client = new OAuth2Client(clientId)
            const login = await client.verifyIdToken({
                idToken: id_token,
                audience: clientId
            })

            const payload = login.getPayload()
            const passRandom = (Math.random() + 1).toString(36).substring(2)

            const [response, isCreated] = await User.findOrCreate({ 
                where: {email: payload.email},
                defaults: {
                    password: passRandom
                }
            })
            
            const token = jwtSign({
                id: response.id,
                email: response.email
            })

            if(isCreated) {
                res.status(201).json({
                    message: `Welcome to ZERO ${response.email}!`, 
                    access_token: token
                })

                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: 'zero.app.testing1@gmail.com',
                        pass: 'iprojectpusing'
                    },
                    pool: true
                })
                
                let mailOptions = {
                    from: 'jokowowbanget123@gmail.com',
                    to: response.email,
                    subject: 'Welcome to ZERO!',
                    text: 'This is a welcome message'
                }
                
                transporter.sendMail(mailOptions, (err) => {
                    if(err){
                        console.log(err)
                    } else{
                        console.log(`email sent to ${response.email}`)
                    }
                })
            } else {
                res.status(200).json({
                    message: `Welcome to ZERO ${response.email}!`, 
                    access_token: token
                })
            }
        }
        catch(err){
            next(err)
        }
    }
    
    static async renderCategories(req,res,next){
        try {
            let response = await Category.findAll()
            if(!response){
                throw ('datanotfound')
            }
            res.status(200).json(response)
        } 
        catch (err) {
            next(err)
        }
    }
    
    static async getNews(req,res,next){
        try {
            let response = await axios({
                method: 'GET',
                url: 'https://newsapi.org/v2/everything?q=waste&apiKey=7026d13236394963856a190be5b09e5c'
            })
            if(!response){
                throw ('datanotfound')
            }
            res.status(200).json(response.data.articles)
        } catch (err) {
            next(err)
        }
    }

    static async postOrder(req, res, next){
        try {
            const {sender, address, itemName, weight, CategoryId, description, isCleaned, photo} = req.body
            const UserId = req.user.id
            if(req.body.weight <= 20){
                throw ('weighterror')
            }
            let response = await Order.create({
                sender, address, itemName, weight, CategoryId, description, isCleaned, photo, UserId 
            }) 
            res.status(201).json(response)
        } 
        catch (err) {
            next(err)
        }
    }

    static async showOrderById(req,res,next){
        try {
            let response = await Order.findAll({
                where: {id: req.params.id}
            })
            let categoryPrice = 0
            if(response[0].dataValues.CategoryId === 1){
                categoryPrice += 2250
            }else if(response[0].dataValues.CategoryId === 2){
                categoryPrice += 1120
            }else if(response[0].dataValues.CategoryId === 3){
                categoryPrice += 2890
            }else if(response[0].dataValues.CategoryId === 4){
                categoryPrice += 2880
            }else if(response[0].dataValues.CategoryId === 5){
                categoryPrice += 875
            }
            let priceTotal = categoryPrice * response[0].dataValues.weight
            res.status(200).json({
                order: response,
                price: priceTotal
            })
        } 
        catch (err) {
            next(err)
        }
    }

    static paypal(req,res,next){
        const paymentObj = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:8083/success",
                "cancel_url": "http://localhost:8080/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "ZERO Down Payment",
                        "sku": "ZERO-0000223",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(paymentObj, (error, payment) => {
            if (error) {
                console.log(error.response.details) ;
            } else {
                for(let i = 0; i < payment.links.length; i++){
                    if(payment.links[i].rel === "approval_url"){
                        res.status(201).json(payment)
                    }
                }
            }
        });
    }

    static paymentSuccess(req, res, next) {
        const payerId = req.query.PayerID
        const paymentId = req.query.paymentId

        const executePayment = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                }
            }]
        }

        paypal.payment.execute(paymentId, executePayment, (error, payment) => {
            if(error){
                console.log(error)
            } else{
                res.status(200).json(payment)
            }
        })
    }
}

module.exports = Controller