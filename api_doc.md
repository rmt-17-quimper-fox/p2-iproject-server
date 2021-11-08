# BingeBuddy API Documentation

## Endpoints :

List of available endpoints:

1. `POST /register`
2. `POST /login`
3. `POST /googleSignIn`
4. `GET /checkToken`

&nbsp;

## 1. POST /register

Description:

- Create new user as admin

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>
}
```

_Response (201 - Created)_

```json
{
    "message": "New admin has been created as below.",
    "id": <integer>,
    "email": <string>
}
```

_Response (400 - Bad Request)_

```json
{
    "name": "Input Validation Error",
    "message": "Please input email."
}
OR
{
    "name": "Input Unique Constraint Error",
    "message": "email must be unique"
}
OR
{
    "name": "Input Validation Error",
    "message": "Please input a valid email."
}
OR
{
    "name": "Input Validation Error",
    "message": "Please input Password"
}
OR
{
    "name": "Input Validation Error",
    "message": "Password length must be at least 5 characters."
}
```

&nbsp;

## 2. POST /login

Description:

- User Login

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```json
{
    "message": "Login Success.",
    "access_token": <string>,
    "email": <string>,
    "role": "staff" OR "admin"
}
```

_Response (401 - Unauthorized)_

```json
{
    "name": "Invalid Login Error",
    "message": "Invalid email or password"
}
```

&nbsp;

## 3. POST /googleSignIn

Description:

- Register or Sign In with Google Account as staff 

Request:

- body:

```json
{
    "google_token": "string"
}
```

_Response (200 - OK)_

```json
{ 
    "message": "Login with Google success.", 
    "access_token" : <string>, 
    "email": <string>, 
    "role": "staff" 
}
```

_Response (201 - Created)_

```json
{ 
    "message": "New user created and login with Google success.", 
    "access_token" : <string>, 
    "email": <string>, 
    "role": "staff" 
}
```
&nbsp;

## 4. GET /checkToken

Description:

- Check token availability and validity 

Request:

- headers:

```json
{
    "access_token": <string>
}
```

_Response (200 - OK)_

```json
{ 
    "message": "Token is valid."
}
```

_Response (401 - Unauthorized)_

```json
{
    "name": "Authentication Error",
    "message": "You are note authorized"
}
```
&nbsp;