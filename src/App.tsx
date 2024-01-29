import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { faker } from "@faker-js/faker";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { _setRandomWord } from "./redux/slices/guessword";
import StickmanArea from "./components/StickmanArea";
import PlayArea from "./components/PlayArea";



function App() {
  const dispatch = useAppDispatch();

  dispatch(_setRandomWord());


  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

<PlayArea/>       
        <StickmanArea />
      </div>

    </>
  );
}

export default App;
