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