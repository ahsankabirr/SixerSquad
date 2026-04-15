import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="w-9/12 mx-auto">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
