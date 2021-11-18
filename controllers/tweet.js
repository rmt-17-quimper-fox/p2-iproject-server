
const { Tweet, User } = require('../models');

class TweetController {
    static async postTweet(req, res, next) {
        console.log(`asdaasdasdasdasdasds`);
        let UserId = req.user.id;
        console.log(UserId, "UserId");
        const { content, location } = req.body;
        console.log(content);
        try {
            let email = req.user.email
            
            const result = await Tweet.create({
                content: content,
                location: "Location",
                replay: 0,
                retweet: 0,
                likes: 0,
                UserId,
                createdAt: new Date (),
                updatedAt: new Date (),
                include: [
                    {
                        model: User,
                        attributes: {
                        exclude: ["createdAt", "updatedAt"],
                        },
                    },
                ],
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
                exclude: ["createdAt"],
                order: ["id", "ASC"]
            },
            order: [["updatedAt", "DESC"]],
            include: [
                {
                    model: User,
                    attributes: {
                    exclude: ["password", "createdAt", "updatedAt"],
                    },
                },
            ],
            
        });
            res.status(200).json(result);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TweetController