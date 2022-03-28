import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Jacqueline Berry and is{" "}
          <a
            href="https://github.com/Learningcodes2021/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
