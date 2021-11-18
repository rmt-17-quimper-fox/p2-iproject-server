const { User, Recipe, Comment } = require('../models'); 
const dateFormatter = require('../helpers/dateFormatter');

const postRecipe = async (req, res, next) => {
    try {
        let { title, imageUrl, ingredients, instructions } = req.body;
        const userId = req.user.id; 
        let resp = await Recipe.create({ title, imageUrl, ingredients, instructions, userId });
        resp = {
            id: resp.id,
            title: resp.title,
            imageUrl: resp.imageUrl,
            ingredients: resp.ingredients,
            instructions: resp.instructions,
            userId: resp.userId,
        };
        res.status(201).json(resp);
    } catch (error) {
        next(error);
    }
};
const getAllRecipes = async (req, res, next) => {
    try {
        let resp = await Recipe.findAll({ 
            include: [{ model: User, attributes:['id', 'username']}, 
        { model: Comment, include: 
            [{ model: User, attributes: ['id', 'username'] }],
            attributes: ['id', 'comments']}], 
            attributes: { exclude : ['userId', 'updatedAt'] } 
        });
        resp = resp.map(el => {
            return {
                id: el.id,
                title: el.title,
                imageUrl: el.imageUrl,
                ingredients: el.ingredients,
                instructions: el.instructions,
                createdAt: dateFormatter(el.createdAt),
                User: el.User,
                Comments: el.Comments
            }
        })
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postRecipe, getAllRecipes
}