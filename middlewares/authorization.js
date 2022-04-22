const { Bookmark } = require('../models/index');

exports.authorization = async (req, res, next) => {
    try {
        const bookmark = await Bookmark.findByPk(req.params.id);
        if (!bookmark) return next({ name: 'BookmarkNotFound' });
        if (bookmark.UserId !== req.userData.id) return next({ name: 'NotAuthorized' });
        next();
    } catch(err) {
        next(err);
    }
}