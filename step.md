
sequelize model:generate --name User --attributes firstName:string,lastName:string,username:string,email:string,password:string,profilePic:string,retweet:string,following:string,followers:string

sequelize model:generate --name Tweet --attributes content:string,location:string,reply:integer,retweet:integer,likes:integer,UserId:integer

sequelize model:generate --name ReplyTweet --attributes content:string,likes:integer,ReplyId:integer

sequelize model:generate --name Retweet --attributes UserId:integer,TweetId:integer