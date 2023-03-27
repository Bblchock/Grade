import "./LocalStorage.css";
import { useState } from "react";

const LocalStorage = () => {
  const [inputBanana, setInputBanana] = useState(
    localStorage.getItem("banana") ?? ""
  );
  const [inputCucumber, setInputCucumber] = useState(
    localStorage.getItem("cucumber") ?? ""
  );
  const [inputWatermelon, setInputWatermelon] = useState(
    localStorage.getItem("watermelon") ?? ""
  );

  const handleInput = event => {
    const inputId = event.target.id;
    const value = event.target.value;
    switch (inputId) {
      case "banana":
        localStorage.setItem("banana", value);
        setInputBanana(value);
        break;

      case "cucumber":
        localStorage.setItem("cucumber", value);
        setInputCucumber(value);
        break;

      case "watermelon":
        localStorage.setItem("watermelon", value);
        setInputWatermelon(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form className="form">
        <legend>LocalStorage</legend>
        <label htmlFor="banana">
          Первая&nbsp;
          <input
            id="banana"
            type="text"
            value={inputBanana}
            onChange={e => handleInput(e)}
          />
        </label>

        <label htmlFor="cucumber">
          Вторая&nbsp;
          <input
            id="cucumber"
            type="text"
            value={inputCucumber}
            onChange={e => handleInput(e)}
          />
        </label>

        <label htmlFor="watermelon">
          Третья&nbsp;
          <input
            id="watermelon"
            type="text"
            value={inputWatermelon}
            onChange={e => handleInput(e)}
          />
        </label>
      </form>
    </div>
  );
};

export default LocalStorage;
