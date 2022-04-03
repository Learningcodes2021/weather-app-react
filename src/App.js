import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://festive-dubinsky-ee75e4.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Front-End Developer Portfolio - Jacqueline Berry"
          >
            {" "}
            Jacqueline Berry{" "}
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Learningcodes2021/weather-app-react"
            target="_blank"
            rel="noreferrer"
            title="Open-sourced GitHub Repository"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://friendly-cheesecake-82b391.netlify.app"
            target="_blank"
            rel="noreferrer"
            title="React Weather App hosted on Netlify"
          >
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
