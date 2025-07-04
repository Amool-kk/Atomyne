import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <form>
        <p>
          <label htmlFor="pet-select">Select pet:</label>
          <select id="pet-select">

            <option value="" selected disabled>Please select a pet</option>
            <option value="cat">
              <span className="icon" aria-hidden="true">
                🐱
              </span>
              <span className="option-label">Cat</span>
            </option>
            <option value="dog">
              <span className="icon" aria-hidden="true">
                🐶
              </span>
              <span className="option-label">Dog</span>
            </option>
            <option value="hamster">
              <span className="icon" aria-hidden="true">
                🐹
              </span>
              <span className="option-label">Hamster</span>
            </option>
            <option value="chicken">
              <span className="icon" aria-hidden="true">
                🐔
              </span>
              <span className="option-label">Chicken</span>
            </option>
            <option value="fish">
              <span className="icon" aria-hidden="true">
                🐟
              </span>
              <span className="option-label">Fish</span>
            </option>
            <option value="snake">
              <span className="icon" aria-hidden="true">
                🐍
              </span>
              <span className="option-label">Snake</span>
            </option>
          </select>
        </p>
      </form>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
