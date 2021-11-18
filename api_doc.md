# API Documentation

## Endpoints :

List of available endpoints:

-   `POST /register`
-   `POST /login`
-   `POST /googleLogin`
-   `GET /fruits`
-   `GET /fruits/:id`
-   `GET /fruits/quiz/:id`
-   `GET /mathematics`
-   `GET /cats`

&nbsp;

## OAUTH

&nbsp;

## 1. POST /register

Description:

-   Post new user data to database

Request:

-   body:

```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "id": "integer",
    "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Email must be unique"
}
OR
{
    "message": "Username is required"
}
OR
{
    "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Description:

-   Post user data for login user

Request:

-   body:

```json
{
    "email": "string",
    "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid email/password"
}
```

&nbsp;

## 3. POST /googleLogin

Request:

-   headers:

```json
{
    "google_access_token"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "string"
}
```

&nbsp;

## 4. GET /fruits/:id

Request:

-   params:

```json
{
    "id": "integer"
}
```

-   headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": "integer",
    "name": "string",
    "imageUrl": "string",
    "nutritions": {
        "carbohydrates": "integer",
        "protein": "integer",
        "fat": "integer",
        "calories": "integer",
        "sugar": "integer"
    }
}
```

&nbsp;

## 5. GET /fruits/quiz/:id

Request:

-   params:

```json
{
    "id": "integer"
}
```

-   headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": "integer",
    "name": "string",
    "imageUrl": "string",
    "answer": {
        "answer1": "string",
        "answer2": "string",
        "answer3": "string",
        "answer4": "string"
    }
}
```

&nbsp;

## 6. GET /mathematics

Request:

-   headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": "string",
    "soal": "integer",
    "jawaban": "string",
    "opsi1": "string",
    "opsi2": "string",
    "opsi3": "string",
    "opsi4": "string"
}
```

&nbsp;

## 7. GET /mathematics

Request:

-   headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "url": "string"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
    "message": "jwt must be provided"
}
```

_Response (404 - Invalid Token)_

```json
{
    "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
    "message": "Forbidden access"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal server error"
}
```
