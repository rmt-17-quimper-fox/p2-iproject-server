const axios = require('axios');
const paginateData = require('../helpers/pagination');
const edamameAPI = 'https://api.edamam.com/api/recipes/v2';
const youtubeAPI = 'https://www.googleapis.com/youtube/v3/search';

const getEdamameRecipes = async (req, res, next) => {
    try {
        let { searchText, dietType, mealType, cuisineType, size, currentPage } = req.body;
        if(!searchText) {
            searchText = 'foods';
        }
        const params = {
            type: 'public',
            app_id: process.env.EDAMAME_API_ID,
            app_key: process.env.EDAMAME_API_KEY,
            q: searchText,
            diet: dietType,
            cuisineType,
            mealType
        }
        const { data } = await axios({
            method: 'GET',
            url: edamameAPI,
            params: params
        })
        let resp = data.hits;
        resp = resp.map(el => {
            return {
                id: el.recipe.uri,
                label: el.recipe.label,
                image: el.recipe.image,
                url: el.recipe.url,
                ingredientLines: el.recipe.ingredientLines,
                totalTime: el.recipe.totalTime,
                healthLabels: el.recipe.healthLabels,
                cautions: el.recipe.cautions,
                cuisineType: el.recipe.cuisineType,
                mealType: el.recipe.mealType,
                calories: el.recipe.calories
            }
        });
        resp.forEach(el => {
            el.id = el.id.split('#')[1]
        });
        if(!req.headers.access_token) {
            resp = resp.slice(0, 3);
            size = resp.length;
            currentPage = 1;
        }
        if(!size) {
            size = resp.length;
            currentPage = 1;
        };
        size = +size;
        currentPage = +currentPage;
        resp = paginateData(resp, size, currentPage);
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    } 
};
const getEdamameRecipeById = async (req, res, next) => {
    try {
        const { foodId } = req.params;
        const params = {
            type: 'public',
            app_id: process.env.EDAMAME_API_ID,
            app_key: process.env.EDAMAME_API_KEY
        }
        const { data } = await axios({
            method: 'GET',
            url: `${edamameAPI}/${foodId}`,
            params: params
        })
        let resp = {
            id: data.recipe.uri,
            label: data.recipe.label,
            image: data.recipe.image,
            url: data.recipe.url,
            ingredientLines: data.recipe.ingredientLines,
            totalTime: data.recipe.totalTime,
            healthLabels: data.recipe.healthLabels,
            cautions: data.recipe.cautions,
            cuisineType: data.recipe.cuisineType,
            mealType: data.recipe.mealType,
            calories: data.recipe.calories
        };
        resp.id = resp.id.split('#')[1];
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    } 
};
const getYoutubeData = async (req, res, next) => {
    try {
        const { searchText } = req.body; 
        const params = {
            type: 'video',
            part: 'snippet',
            maxResult: 5,
            key: process.env.YOUTUBE_API_KEY,
            q: `${searchText} Recipes`
        }
        const { data } = await axios({
            method: 'GET',
            url: youtubeAPI,
            params
        })
        let resp = data.items;
        resp = resp.map(el => el.id.videoId);
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    } 
};

module.exports = {
    getEdamameRecipes, getEdamameRecipeById, getYoutubeData
}

