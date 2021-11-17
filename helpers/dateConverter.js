function dateFormatter(inputDate) {
    inputDate = new Date(inputDate);
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return inputDate.toLocaleDateString("en-US", options);
  }

  module.exports = {dateFormatter}