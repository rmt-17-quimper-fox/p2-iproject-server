
const { Tweet, User } = require('../models');

class TweetController {
    static async postTweet(req, res, next) {
        let UserId = req.user.id;
        console.log(UserId, "UserId");
        try {
            let email = req.user.email
            const { content, location } = req.body;
            
            const result = await Tweet.create({
                content,
                location: "Location",
                replay: 0,
                retweet: 0,
                likes: 0,
                UserId
            })
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async getTweet(req, res, next) {
        try {
            console.log(`1234544`);
            const result = await Tweet.findAll({attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [
                {
                    model: User,
                    attributes: {
                    exclude: ["password", "createdAt", "updatedAt"],
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

module.exports = TweetController