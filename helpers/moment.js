const moment = require('moment');

const momentFormatter = (createdPostTime) => {
    let moment = new Date(createdPostTime);
    moment =  moment.toISOString().split('T')[0].split('-').join('');
    return moment(data, "YYYYMMDD").fromNow();
}

module.exports = momentFormatter;