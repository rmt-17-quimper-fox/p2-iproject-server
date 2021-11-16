const axios = require('axios')

axios({
    url: 'https://api.opendota.com/api/heroes/',
    method: 'get'
})
.then(({ data }) => {
    console.log(data);
})