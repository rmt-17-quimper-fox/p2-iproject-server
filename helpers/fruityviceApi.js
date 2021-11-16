const axios = require('axios')

const fruitsImageUrl = {
    Apple: "https://image.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg",
    Banana: "https://image.freepik.com/free-vector/hand-drawn-colorful-banana-illustration_53876-2978.jpg",
    Lemon: "https://image.freepik.com/free-vector/hand-drawn-colorful-lemon-illustration_53876-2976.jpg",
    Mango: "https://image.freepik.com/free-vector/hand-drawn-mango-fruit-illustration_53876-2986.jpg",
    Orange: "https://image.freepik.com/free-vector/hand-drawn-colorful-orange-illustration_53876-2977.jpg"
}

async function getFruits() {
    const findFruit = ['Apple', 'Banana', 'Lemon', 'Mango', 'Orange']
    const imageUrl = fruitsImageUrl
    let result = []
    let id = 0
    const response = await axios({
        methods: "GET",
        url: `https://www.fruityvice.com/api/fruit/all`
    })
    for (const key of response.data) {
        for (const iterator of findFruit) {
            let temp = {}
            if (key.name === iterator) {
                key.imageUrl = imageUrl[iterator]
                id++
                temp.id = id
                temp.name = key.name
                temp.imageUrl = key.imageUrl
                temp.nutritions = key.nutritions
                result.push(temp)
            }
        }
    }
    return result
}

module.exports = { getFruits }