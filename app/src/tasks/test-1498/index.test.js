const formateDate = require("./index");

describe("checkValue", () => {
  let date, anticipate, changeMinutes;

  const randomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  beforeEach(() => {
    date = new Date();
    changeMinutes = randomNumber(10);
    anticipate = (local, changeMinutes) => {
      if (changeMinutes) {
        let value = date.setMinutes(changeMinutes);
        return value.toLocaleString(local);
      }
      return date.toLocaleString(local);
    };
  });

  test("Проверка ru", () => {
    expect(formateDate(date, "ru")).toBe(anticipate("ru"));
  });

  test("Проверка en-us", () => {
    expect(formateDate(date, "en-US")).toBe(anticipate("en-US"));
  });

  test("Проверка en-gb", () => {
    expect(formateDate(date, "en-GB")).toBe(anticipate("en-GB"));
  });

  test("Проверка добавления минут", () => {
    expect(formateDate(date, "ru", changeMinutes)).toBe(
      anticipate("ru", changeMinutes)
    );
  });
});
