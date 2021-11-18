# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-signin`
- `GET /get-news`
- `GET /products/delete/:id`
- `POST /new-patients`
- `DELETE /patients/:id`
- `PUT /patients/:id`
- `GET /patients-detail`
- `GET /patients', auth`
- `GET /patients/:id'`


&nbsp;

## 1. POST /register

Description:
- Get all products from database

Request:

_Response (200 - OK)_

```json
[
    {
        "id": 4,
        "email": "email@gmail.com",
    },
]

```

Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login
Response (200 - OK)_

```json
[
    {
        "message": "Success login",
        "token": "email@gmail.com",
        "role": "User",
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid Email or password"
}

```
## 3. POST /google-signin
Response (200 - OK)_

```json
[
    {
        "message": "Success login",
        "token": "email@gmail.com",
        "role": "User",
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid Email or password"
}

## 4. GET /get-news
Response (200 - OK)_

requred: {
  "headers" : {
    "access_token"
   }
}
```json
[
    {
        "articles": [{
          "obj"
        }]
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid Email or password"
}
## 5. POST /new-patients`
Response (201 - OK)_
requred: {
  "headers" : {
    "access_token"
   }
}
```json
[
    {
        "message": "Success added..",
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid token"
}

## 6. DELETE /patients/:id
Response (200 - OK)_
requred: {
  "headers" : {
    "access_token"
   }
}
```json
[
    {
        "message": "Success deleted..",
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid token"
}

OR
{
  "message": "access dennied.. "
}

## 7. PUT /patients/:id
Response (200 - OK)_
requred: {
  "headers" : {
    "access_token"
   }
}
```json
[
    {
        "message": "Success deleted..",
    },
]

Response (400 - Bad Request)_

```json
{
  "message": "Invalid token"
}
Response (404 - not Found)_

OR
{
  "message": "user not found "
}
## 8. GET /patients-detail/:id


Response (400 - Bad Request)_

```json
{
    "message": "access denied you don't have permission to access"
}
## 9. GET /patients
Response (400 - Bad Request)_

```json
{
    "message": "access denied you don't have permission to access"
}
## 10. GET /patients/:id
Response (400 - Bad Request)_

```json
{
    "message": "access denied you don't have permission to access"
}
