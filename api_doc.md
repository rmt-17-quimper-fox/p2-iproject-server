user:
{
    email: string (required, unique),
    password: string(required),
}

bookmark:
{
    title: string (required),
    imageUrl: string (required),
    description: string (required),
    link: string (required),
    UserId: integer (required),
}

sequelize-cli model:generate --name User --attributes email:string,password:string
sequelize-cli model:generate --name Bookmark --attributes title:string,imageUrl:string,description:string,link:string,UserId:integer


post bookmark 
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

mojoauth
{
  identifier: 'irawandns@gmail.com',
  auth_type: 'magiclink',
  token_type: 'access_token',
  aud: '3129be04-cebd-4e8a-9114-6bd198dfef04',
  exp: 1641045574,
  jti: '88f5fdd7-2ac2-46ca-8d4d-793da776efbc',
  iat: 1637105374,
  iss: 'https://www.mojoauth.com',
  nbf: 1637105374
}