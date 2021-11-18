
# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /googlelogin`
- `GET /news`
- `GET /category`
- `POST /order`
- `GET /order/:id`
- `POST /pay`
- `GET /success`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": string,
  "password": string,
}
```

Response status 201

```json
{
  "message": "Success registered $email"
}
```

Response status 400

```json
{
  "error": "Email is required"
}
OR
{
  "error": "Password is required" 
}
OR
{
  "error": "Email must be unique"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": string,
  "password": string
}
```

Response status 200

```json
{
  "message": "Welcome to ZERO $email !",
  "access_token": jwt_token
}
```

Response status 400

```json
{
  "error": "Email is required"
}
OR
{
  "error": "Password is required" 
}
```

Response status 401 

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. POST /googlelogin

Request:

Response status 200

```json
{
  "message": "Welcome to ZERO $email !",
  "access_token": jwt_token
}
```

&nbsp;

## 4. GET /news

Description:
- Get data from News API

Request:

- headers: access_token

```json
{
  "access_token": "string"
}
```

Response status 200 

```json
[
  {
    "source": {
        "id": null,
        "name": "Lifehacker.com"
    },
    "author": "Becca Lewis",
    "title": "6 Clever Ways You Should Be Using Beeswax Around the House",
    "description": "For repairs and maintenance of tools and furniture, beeswax is a versatile, natural, and low-waste option that can be used as a lubricant, a protective coating, and a sealant. It can condition your cutting boards and help prevent your tools from rusting. Read…",
    "url": "https://lifehacker.com/6-clever-ways-you-should-be-using-beeswax-around-the-ho-1847873553",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7a647d3adeb8ccb23726dc2711143b96.jpg",
    "publishedAt": "2021-10-18T14:00:00Z",
    "content": "For repairs and maintenance of tools and furniture, beeswax is a versatile,natural, and low-waste option that can be used as a lubricant, a protective coating, and a sealant. It can condition your cu… [+635 chars]"
  },
   ... 
]
```

Response status 404

```json
{
  "message": "Data not Found!"
}
```


&nbsp;

## 5. GET /category

Description:
- Get all data from "Categories" table

Request:

- headers: token

```json
{
  "access_token": "string"
}
```

Response status 200
```json
[
    {
        "id": 1,
        "name": "Plastic",
        "createdAt": "2021-11-16T08:02:47.756Z",
        "updatedAt": "2021-11-16T08:02:47.756Z"
    },
    {
        "id": 2,
        "name": "Paper",
        "createdAt": "2021-11-16T08:02:47.756Z",
        "updatedAt": "2021-11-16T08:02:47.756Z"
    },
    ...
]
```

Response status 404
```json
{
  "message": "Data not Found!"
}
```

&nbsp;

## 6. POST /order

Request:

- headers: token

```json
{
  "access_token": "string"
}
```
- body: 

```json
{
    "sender": string,
    "address": text,
    "itemName": string,
    "weight": integer,
    "description": text,
    "isCleaned": boolean,
    "CategoryId": integer,
    "photo": file
}
```

Response status 201
```json
{
    "sender": "PT Karya",
    "address": "Tangerang",
    "itemName": "Botol beling",
    "weight": 100,
    "description": "botol bekas kecap/saos",
    "isCleaned": true,
    "CategoryId": 2,
    "photo": File
}
```

Response status 400
```json
{
  "message": "Weight must be at least 20kg"
}
```

&nbsp;

## 8. GET /order/:id

Request:

- params: integer

- headers:

```json
{
  "access_token": "string"
}
```

Response 200

```json
{
  "order": [
        {
            "id": 5,
            "sender": "PT Karya Bangsa",
            "address": "Karawang",
            "UserId": 1,
            "itemName": "Kardus bekas",
            "weight": 50,
            "CategoryId": 2,
            "description": "kardus bekas packaging air mineral",
            "isCleaned": true,
            "photo": "https://drive.google.com/file/d/1RfeyyPUOmO-lby70HXeH-IoFgfMJwTfH/view?usp=drivesdk",
            "createdAt": "2021-11-17T13:57:54.455Z",
            "updatedAt": "2021-11-17T13:57:54.455Z"
        }
    ],
    "price": 56000
}
```

Response 403

```json
{
  "message": "You are not authorized"
}
```

&nbsp;

## 9. POST /pay

- headers:

```json
{
  "access_token": "string"
}
```
Response 201

```json
{
    "id": "PAYID-MGKZNUI8RS372223U942454V",
    "intent": "sale",
    "state": "created",
    "payer": {
        "payment_method": "paypal"
    },
    "transactions": [Object],
    "create_time": "2021-11-17T23:57:04Z",
    "links": [Object],
    "httpStatusCode": 201
}
```

## 9. GET /success

- headers:

```json
{
  "access_token": "string"
}
```
Response 200

```json
{
    "id": "PAYID-MGKZOLA1SR95051RW646874R",
    "intent": "sale",
    "state": "approved",
    "cart": "2W581218LN594205A",
    "payer": {
        "payment_method": "paypal",
        "status": "VERIFIED",
        "payer_info": {
            "email": "sb-f1ka88550109@business.example.com",
            "first_name": "John",
            "last_name": "Doe",
            "payer_id": "Z6RHM3FE8F24U",
            "shipping_address": {
                "recipient_name": "John Doe",
                "line1": "Jl Senopati 1",
                "city": "Jakarta",
                "state": "Jakarta",
                "postal_code": "12110",
                "country_code": "ID"
            },
            "country_code": "ID",
            "business_name": "Test Store"
        }
    },
    "transactions": [Object],
    "failed_transactions": [],
    "create_time": "2021-11-17T23:58:36Z",
    "update_time": "2021-11-17T23:59:01Z",
    "links": [Object],
    "httpStatusCode": 200
}
```


## Global Error

Response status 401

```json
{
  "message": "Invalid token"
}
```

Response 500 

```json
{
  "message": "Internal server error"
}
```