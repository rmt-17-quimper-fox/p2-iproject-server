
const { Tweet, User, Retweet } = require('../models');

class RetweetController {
    static async getRetweet (req, res, next) {
        console.log(`asd`);
        console.log(req.user.id);
        try {
            const retweet = await Retweet.findAll({
                include: [
                    {
                        model: User,
                        attributes: {
                        exclude: ["password", "createdAt", "updatedAt"],
                        },
                    },
                    {
                        model: Tweet,
                        attributes: {
                        exclude: ["createdAt", "updatedAt"],
                        },
                    },
                ],
                where: {
                    "userId": req.user.id
                }
            })
            res.status(200).json(retweet)
        } catch (err) {       
            console.log('error');     
            console.log(err);
            res.status(err)
        }
    }

    static async postRetweet (req, res, next) {
        try {
            const { id } = req.user
            const { TweetId } = req.params
            const retweet = await Retweet.create ({
                userId: id,
                TweetId
            })
            res.status(200).json(retweet)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = RetweetController