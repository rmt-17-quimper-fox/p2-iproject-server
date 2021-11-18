const dateFormatter = (createdPostTime) => {
    let dataPostTime = new Date(createdPostTime);
    return `${dataPostTime.toDateString()} ${dataPostTime.toLocaleTimeString()}`;
}

module.exports = dateFormatter;