import React , { FunctionComponent } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./features/home";


const App : FunctionComponent = () => {

  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} key="/" />
      </Routes>
    </div>
    
  );
}

export default App;
