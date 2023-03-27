import "./Array.css";
import { useState } from "react";

const Array = () => {
  const [inputState, setInputState] = useState("");
  const [result, setResult] = useState([]);

  const handleInput = event => {
    const inputValue = event.target.value;
    setInputState(inputValue);
  };

  // 1 задача
  const handleTaskOne = () => {
    let array = JSON.parse(inputState)
      .flat()
      .filter(item => item > 0 && item % 2 === 0)
      .sort((a, b) => {
        return b - a;
      });

    setResult(JSON.stringify(array));
  };

  // 2 задача
  const handleTaskTwo = () => {
    let array = JSON.parse(inputState);
    let findNumbers = [];
    array.forEach((item, id) => {
      let bafore = array[id - 1];
      let after = array[id + 1];
      if (bafore % item === 0 && after % item === 0) {
        findNumbers.push(bafore);
        findNumbers.push(after);
      }
    });
    findNumbers = findNumbers.sort((a, b) => a - b);
    setResult(JSON.stringify(findNumbers));
  };

  // 3 задача
  const handleTaskThree = () => {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    const string = String(inputState).split("");

    string.forEach(item => {
      if (vowels.includes(item)) {
        counter++;
      }
    });

    setResult(`Кол-во гласных (${vowels}) - ${counter} `);
  };

  return (
    <div className="array-wrapper">
      <form className="form">
        <legend>Array</legend>
        <label htmlFor="banana">
          Сюда массив&nbsp;
          <input
            id="banana"
            type="text"
            value={inputState}
            onChange={e => handleInput(e)}
          />
        </label>
      </form>
      <div className="button-wrapper">
        <button onClick={() => handleTaskOne()}>Посчитать 1 задачу</button>
        <button onClick={() => handleTaskTwo()}>Посчитать 2 задачу</button>
        <button onClick={() => handleTaskThree()}>Посчитать 3 задачу</button>
      </div>
      <div>Ответ: {result}</div>
    </div>
  );
};

export default Array;
