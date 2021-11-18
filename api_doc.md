# NewSource Server
NewSource is an application to manage your news. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /login

> post login

_Response (200)_
```
[
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MzcyMDMzNzV9.CWxtJPtvYOBplHyNxcY13PdjXTjrD5cxV09KnFu2gq0",
    "email": "admin@gmail.com"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---

### POST /register

> post register

_Response (200)_
```
[
    {
    "id": 5,
    "email": "admin@gmail.com"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /mojologin

> post for mojoAuth login

_Response (200)_
```
[
    {
    "id": 5,
    "email": "admin@gmail.com"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /bookmarks

> post bookmarks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
    title: string (required),
    imageUrl: string (required),
    description: string (required),
    link: string (required)
}
```

_Response (201 - Created)_
```
{
    "id": 1,
    "title": "Rivian shares soar again in post-IPO rally",
    "imageUrl": "https://image.cnbcfm.com/api/v1/image/106972937-1636485809683-gettyimages-1352304217-dscf2895_2021110911844836.jpeg?v=1637072793",
    "description": "Rivian shares continue to rally less than a week after the company went public in one of the biggest IPOs of the year.",
    "link": "https://www.cnbc.com/2021/11/16/rivian-shares-rise-in-post-ipo-rally.html",
    "UserId": 1,
    "updatedAt": "2021-11-16T15:03:07.398Z",
    "createdAt": "2021-11-16T15:03:07.398Z"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

---
### GET /bookmarks

> GET bookmarks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response (200 - Success)_
```
[
    {
    "id": 1,
    "title": "Rivian shares soar again in post-IPO rally",
    "imageUrl": "https://image.cnbcfm.com/api/v1/image/106972937-1636485809683-gettyimages-1352304217-dscf2895_2021110911844836.jpeg?v=1637072793",
    "description": "Rivian shares continue to rally less than a week after the company went public in one of the biggest IPOs of the year.",
    "link": "https://www.cnbc.com/2021/11/16/rivian-shares-rise-in-post-ipo-rally.html",
    "UserId": 1,
    "updatedAt": "2021-11-16T15:03:07.398Z",
    "createdAt": "2021-11-16T15:03:07.398Z"
    },
]

```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
