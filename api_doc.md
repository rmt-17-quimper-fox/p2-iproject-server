# BingeBuddy API Documentation

## Endpoints :

List of available endpoints:

1. `POST /register`
2. `POST /login`
3. `POST /googleSignIn`

4. `GET /series`
5. `GET /series/:id`
6. `GET /series/:id/season/:season`

7. `GET /watchlist`
8. `POST /watchlist/:serialId`
9. `DELETE /watchlist/:watchlistId`

&nbsp;

## 1. POST /register

Description:

- Create new user

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>,
    "role": <string>
}
```

_Response (201 - Created)_

```json
{
  "message": "New <user_type> has been created"
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
    "name": "Input Unique Constraint Error",
    "message": "Email must be unique"
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

- Register or Sign In with Google Account as 'User'

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
}
```

_Response (201 - Created)_

```json
{
    "message": "New user created and login with Google success.",
    "access_token" : <string>,
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Registered as Employee"
}
```

&nbsp;

## 4. GET /series

Description:

- Fetch series data from 3rd Party API

Request:

- query:

```json
{
    "search": "string" (optional),
    "sortBy": "string" (optional),
    "page": "integer" (optional)
}
```

_Response (200 - OK)_

```json
{
    "page": 2,
    "total_pages": 75,
    "total_results": 1493,
    "seriesList": [
        {
            "id": 65386,
            "title": "Stan Lee's Lucky Man",
            "originalTitle": "Stan Lee's Lucky Man",
            "origin": "GB",
            "popularity": 12,
            "imgURL": "https://image.tmdb.org/t/p/w500/cnKC1Az0uWTyMifFoG2t2mtD2xD.jpg",
            "releaseYear": 2016
        },
        ...
    ]
}
```

&nbsp;

## 5. GET /series/:id

Description:

- Fetch single data by ID from 3rd Party API

Request:

- params:

```json
{
    "id": "integer",
}
```

_Response (200 - OK)_

```json
{
    "id": 1399,
    "title": "Game of Thrones",
    "originalTitle": "Game of Thrones",
    "createdBy": "David Benioff,  D. B. Weiss",
    "avg_length": "60",
    "genre": "Sci-Fi & Fantasy, Drama, Action & Adventure",
    "homePage": "http://www.hbo.com/game-of-thrones",
    "firstAired": "Sunday, April 17, 2011",
    "lastAired": "Sunday, May 19, 2019",
    "networks": [
        {
            "name": "HBO",
            "logo": "https://image.tmdb.org/t/p/w500/tuomPhY2UtuPTqqFnKMVHvSb724.png"
        }
    ],
    "numberOfEpisodes": 73,
    "numberOfseasons": 8,
    "seasonsList": "Specials, Season 1, Season 2, Season 3, Season 4, Season 5, Season 6, Season 7, Season 8",
    "seasons": [
        {
            "id": 0,
            "seasonTitle": "Specials"
        },
        {
            "id": 1,
            "seasonTitle": "Season 1"
        },
        {
            "id": 2,
            "seasonTitle": "Season 2"
        },
        {
            "id": 3,
            "seasonTitle": "Season 3"
        },
        {
            "id": 4,
            "seasonTitle": "Season 4"
        },
        {
            "id": 5,
            "seasonTitle": "Season 5"
        },
        {
            "id": 6,
            "seasonTitle": "Season 6"
        },
        {
            "id": 7,
            "seasonTitle": "Season 7"
        },
        {
            "id": 8,
            "seasonTitle": "Season 8"
        }
    ],
    "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    "popularity": 559.833,
    "imgURL": "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    "status": "Ended",
    "tagline": "Winter Is Coming",
    "trailer": "https://www.youtube.com/embed/KPLWWIOCOOQ"
}
```
&nbsp;

## 6. GET /series/:id/season/:season

Description:

- Fetch series season data from 3rd Party API

Request:

- query:

```json
{
    "id": "integer" ,
    "season": "integer" ,
}
```

_Response (200 - OK)_

```json
{
    "seasonTitle": "Season 1",
    "episodes": [
        {
            "title": "Winter Is Coming",
            "episodeNumber": 1,
            "overview": "Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.",
            "airDate": "Sunday, April 17, 2011"
        },
        {
            "title": "The Kingsroad",
            "episodeNumber": 2,
            "overview": "While Bran recovers from his fall, Ned takes only his daughters to Kings Landing. Jon Snow goes with his uncle Benjen to The Wall. Tyrion joins them.",
            "airDate": "Sunday, April 24, 2011"
        },
        {
            "title": "Lord Snow",
            "episodeNumber": 3,
            "overview": "Lord Stark and his daughters arrive at King's Landing to discover the intrigues of the king's realm.",
            "airDate": "Sunday, May 01, 2011"
        },
        {
            "title": "Cripples, Bastards, and Broken Things",
            "episodeNumber": 4,
            "overview": "Eddard investigates Jon Arryn's murder. Jon befriends Samwell Tarly, a coward who has come to join the Night's Watch.",
            "airDate": "Sunday, May 08, 2011"
        },
        {
            "title": "The Wolf and the Lion",
            "episodeNumber": 5,
            "overview": "Catelyn has captured Tyrion and plans to bring him to her sister, Lysa Arryn, at The Vale, to be tried for his, supposed, crimes against Bran. Robert plans to have Daenerys killed, but Eddard refuses to be a part of it and quits.",
            "airDate": "Sunday, May 15, 2011"
        },
        {
            "title": "A Golden Crown",
            "episodeNumber": 6,
            "overview": "While recovering from his battle with Jamie, Eddard is forced to run the kingdom while Robert goes hunting. Tyrion demands a trial by combat for his freedom. Viserys is losing his patience with Drogo.",
            "airDate": "Sunday, May 22, 2011"
        },
        {
            "title": "You Win or You Die",
            "episodeNumber": 7,
            "overview": "Robert has been injured while hunting and is dying. Jon and the others finally take their vows to the Night's Watch. A man, sent by Robert, is captured for trying to poison Daenerys. Furious, Drogo vows to attack the Seven Kingdoms.",
            "airDate": "Sunday, May 29, 2011"
        },
        {
            "title": "The Pointy End",
            "episodeNumber": 8,
            "overview": "Eddard and his men are betrayed and captured by the Lannisters. When word reaches Robb, he plans to go to war to rescue them. The White Walkers attack The Wall. Tyrion returns to his father with some new friends.",
            "airDate": "Sunday, June 05, 2011"
        },
        {
            "title": "Baelor",
            "episodeNumber": 9,
            "overview": "Robb goes to war against the Lannisters. Jon finds himself struggling on deciding if his place is with Robb or the Night's Watch. Drogo has fallen ill from a fresh battle wound. Daenerys is desperate to save him.",
            "airDate": "Sunday, June 12, 2011"
        },
        {
            "title": "Fire and Blood",
            "episodeNumber": 10,
            "overview": "With Ned dead, Robb vows to get revenge on the Lannisters. Jon must officially decide if his place is with Robb or the Night's Watch. Daenerys says her final goodbye to Drogo.",
            "airDate": "Sunday, June 19, 2011"
        }
    ]
}
```

&nbsp;
## 7. GET /watchlist

Description:

- Fetch User Watchlist

Request:

- headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "UserId": 2,
        "SerialId": 1399,
        "serialTitle": "Game of Thrones",
        "serialNextAir": "1970-01-01T00:00:00.000Z",
        "createdAt": "2021-11-17T19:26:31.491Z",
        "updatedAt": "2021-11-17T19:26:31.491Z"
    }
]
```
_Response (401 - Unauthorized)_

```json
{
    "name": "Authentication Error",
    "message": "Invalid token"
}
```
&nbsp;
## 8. POST /watchlist/:serialId

Description:

- Add Item to User Watchlist

Request:

- headers:

```json
{
    "access_token": "string"
}
```
- params:

```json
{
    "serialId": "integer"
}

_Response (201 - Created)_

```json
{
    "newWatchlist": {
        "id": 2,
        "UserId": 2,
        "SerialId": 1388,
        "serialTitle": "Take a Bow",
        "serialNextAir": "1970-01-01T00:00:00.000Z",
        "updatedAt": "2021-11-17T19:47:50.696Z",
        "createdAt": "2021-11-17T19:47:50.696Z"
    },
    "seriesDetail": {
        "id": 1388,
        "title": "Take a Bow",
        "nextAir": null
    },
    "message": "Take a Bow has been added to your watchlist."
}
```
_Response (400 - Bad Request)_

```json
{
    "name": "Duplicate Error",
    "message": "This item is already in your watchlist."
}
```
_Response (401 - Unauthorized)_

```json
{
    "name": "Authentication Error",
    "message": "Invalid token"
}
```
_Response (403 - Forbidden)_

```json
{
    "name": "Forbidden Error",
    "message": "You are not authorized"
}
OR
{
    "name": "Forbidden Error",
    "message": "Only 'Users' can access"
}

```
&nbsp;

## 9. DELETE /watchlist/:watchlistId

Description:

- Delete Item from User Watchlist

Request:

- headers:

```json
{
    "access_token": "string"
}
```
- params:

```json
{
    "watchlistId": "integer"
}

_Response (200 - OK)_

```json
{
    "message": "<item_name> has been removed from your watchlist"
}
```
_Response (400 - Bad Request)_

```json
{
    "name": "Duplicate Error",
    "message": "This item is already in your watchlist."
}
```
_Response (401 - Unauthorized)_

```json
{
    "name": "Authentication Error",
    "message": "Invalid token"
}
```
_Response (403 - Forbidden)_

```json
{
    "name": "Forbidden Error",
    "message": "You are not authorized"
}
OR
{
    "name": "Forbidden Error",
    "message": "Only 'Users' can access"
}

```
&nbsp;

## Global Error
_Response (404 - Internal Server Error)_

```json
{
  "name": "Not Found Erro",
  "message": <string>
}
```

_Response (500 - Not Found)_

```json
{
  "name": "Internal server error",
  "message": <string>
}
```

