const { Tweet, User, ReplyTweet } = require("../models");

class ReplyTweetController {
    static async postReplyTweet (req, res, next) {
        try {
            let TweetId = +req.params.id
            const { content, like} = req.body
            const findTweet = await Tweet.findByPk(id);
            if (!findTweet) {  
                throw ({ message: `Tweet id ${id} is missing`, name : `Error Not Found`})
            } else {
                await News.update(newsObj, {where: {id}})
                res.status(200).json({ message: `News id ${id} is updated`, replyTweet});
                const replyTweetObj = {
                    content: content,
                    like: 0,
                }
                await ReplyTweet.create(replyTweetObj, {
                    include: [
                        {
                            model: User,
                            attributes: {
                            exclude: ["password", "createdAt", "updatedAt"],
                            },
                        },
                    ],
                })

            }
        } catch (error) {
            console.log(error.message);
            next(error)
        }
    }

    static async getReplyTweet(req, res, next) {
        try {
            console.log(`1234544`);
            const result = await ReplyTweet.findAll({
            include: [
                {
                    model: Tweet,
                    attributes: {
                    exclude: [ "createdAt", "updatedAt"],
                    },
                },
            ],
            // order: ["updatedAt", "ASC"]
        });
            res.status(200).json(result);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ReplyTweetController;
