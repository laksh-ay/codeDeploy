import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState<string>("");
  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get("http://localhost:3000/local/hello");
      setData(response.data);
    };
    fetchResult();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
