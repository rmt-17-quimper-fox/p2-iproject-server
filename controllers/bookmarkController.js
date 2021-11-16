const { Bookmark } = require('../models/index')


class bookmarkController {
    static async postBookmark (req, res, next){
        try {
            const UserId = req.user.id
            const {title, imageUrl, description, link,} = req.body
            const bookmark = await Bookmark.create({
                title,
                imageUrl,
                description,
                link,
                UserId
            })
            res.status(201).json(bookmark)
        } catch (err) {
            next(err)
        }
    }
    
    static async getBookmark (req, res, next){
        try {
            const result = await Bookmark.findAll({
                where:{UserId: req.user.id}
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports= bookmarkController