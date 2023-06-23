import React, { memo, useState } from "react";

export const Optimization = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleAgeChange = event => {
        setAge(Number(event.target.value));
    };

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="number" value={age} onChange={handleAgeChange} />
            <button onClick={handleClick}>Increment</button>
            <p>{count}</p>
            <ChildComponentOne name={name} age={age} />
        </div>
    );
};

const ChildComponentOne = memo(({ name, age }) => {
    console.log("ChildComponent is rendered."); // Выводится в консоль при каждом рендере

    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
});
