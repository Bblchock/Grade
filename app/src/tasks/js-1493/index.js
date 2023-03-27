const dateBefore = document.querySelector(".date-before");
const dateAfter = document.querySelector(".date-after");
const dateAfterIntl = document.querySelector(".date-after-intl");

const addZero = value => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

const customFormat = date => {
  //custom
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  const number = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = addZero(date.getFullYear());

  const formateDate = `Время: ${hours}:${minutes}:${seconds}, Дата: ${number}.${month}.${year}`;

  //intl
  const formatterTime = Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
  const formatterDate = Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);

  const formetterFinally = `Время: ${formatterTime}, Дата: ${formatterDate}`;
  //------

  dateBefore.textContent = ` ${date}`;
  dateAfter.textContent = ` ${formateDate}`;
  dateAfterIntl.textContent = ` ${formetterFinally}`;
};

customFormat(new Date());

setInterval(() => {
  customFormat(new Date());
}, 1000);
