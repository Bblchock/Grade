import "./LocalStorage.css";
import { useState } from "react";

const LocalStorage = () => {
  const [inputData, setInputData] = useState(
    JSON.parse(localStorage.getItem("inputData")) ?? ""
  );

  const handleInput = event => {
    const inputId = event.target.id;
    const value = event.target.value;
    let newValue;
    switch (inputId) {
      case "banana":
        newValue = { ...inputData, banana: value };
        localStorage.setItem("inputData", JSON.stringify(newValue));
        setInputData(newValue);
        break;

      case "cucumber":
        newValue = { ...inputData, cucumber: value };
        localStorage.setItem("inputData", JSON.stringify(newValue));
        setInputData(newValue);
        break;

      case "watermelon":
        newValue = { ...inputData, watermelon: value };
        localStorage.setItem("inputData", JSON.stringify(newValue));
        setInputData(newValue);
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
            value={inputData.banana}
            onChange={e => handleInput(e)}
          />
        </label>

        <label htmlFor="cucumber">
          Вторая&nbsp;
          <input
            id="cucumber"
            type="text"
            value={inputData.cucumber}
            onChange={e => handleInput(e)}
          />
        </label>

        <label htmlFor="watermelon">
          Третья&nbsp;
          <input
            id="watermelon"
            type="text"
            value={inputData.watermelon}
            onChange={e => handleInput(e)}
          />
        </label>
      </form>
    </div>
  );
};

export default LocalStorage;
