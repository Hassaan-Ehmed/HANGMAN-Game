import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { faker } from "@faker-js/faker";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { _setRandomWord } from "./redux/slices/guessword";
import StickmanArea from "./components/StickmanArea";
import PlayArea from "./components/PlayArea";
import wall from './images/wall4.png'



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
        <img src={wall} alt=""  style={{
          height:"100vh",
          width:"100%",
          position:"absolute",
          zIndex:-1,
          objectFit:"cover"
        }}/>


<PlayArea/>       
 <StickmanArea />


      </div>

    </>
  );
}

export default App;
