import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeyPad from "./components/Keypad";
import { faker } from "@faker-js/faker";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { _setRandomColor } from "./redux/slices/guessword";
import StickmanArea from "./components/StickmanArea";
import GameOver from "./components/GameOver";

// const chooseRandomNum = (arr)=>{

//   let RandomNum = Math.floor(Math.random() * arr.length)

// return arr[RandomNum]

// }

function App() {
  const dispatch = useAppDispatch();

  dispatch(_setRandomColor(faker.color.human() as any));

  return (
    <>
      {/* <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <KeyPad />
        <StickmanArea />
      </div> */}

      <GameOver/>
    </>
  );
}

export default App;
