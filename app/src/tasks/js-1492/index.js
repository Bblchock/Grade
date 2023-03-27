let dateBefore = document.querySelector(".date-before");
let dateAfter = document.querySelector(".date-after");

let test = document.querySelector(".test");

let date;
let formateDate;

const addZero = value => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

setInterval(() => {
  date = new Date();
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  let number = addZero(date.getDate());
  let month = addZero(date.getMonth() + 1);
  let year = addZero(date.getFullYear());

  formateDate = `Время: ${hours}:${minutes}:${seconds}, Дата: ${number}.${month}.${year}`;

  dateBefore.textContent = ` ${date}`;
  dateAfter.textContent = ` ${formateDate}`;
}, 1000);
