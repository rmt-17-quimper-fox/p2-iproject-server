const paginateData = (data, size, currentPage)  => {
    return {
        totalItems: data.length,
        data: data.slice((currentPage - 1) * size, currentPage * size),
        size,
        currentPage
    };
}

module.exports = paginateData;