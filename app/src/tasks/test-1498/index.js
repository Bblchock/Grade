const formateDate = (date, local, changeMinutes) => {
  if (changeMinutes) {
    let value = date.setMinutes(changeMinutes);
    return value.toLocaleString(local);
  }
  return date.toLocaleString(local);
};

module.exports = formateDate;
