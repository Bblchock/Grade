import LocalStorage from "./tasksJunior/js-1496/LocalStorage";
import Request from "./tasksJunior/js-1495/Request";
import Array from "./tasksJunior/js-1492/Array";
import "./App.css";
import { game } from "./tasksMiddle/class-js-1588/class.ts";
import { Optimization } from "./tasksMiddle/optimization-react-1590/Optimization";

function App() {
    game(); //Драка классами task 1588
    return (
        <div className="wrapper">
            <LocalStorage />
            <Request />
            <Array />
            <Optimization />
        </div>
    );
}

export default App;
