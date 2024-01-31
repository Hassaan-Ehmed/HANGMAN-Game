import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { _getCorrectLetters } from "../redux/slices/guessword";
export default function Placeholder() {
  const dispatch = useAppDispatch();

  const storeState: any = useAppSelector((state) => state.guessword);
  const randomWord: string = storeState.randomWord;
  const isWin = storeState.isWin;
  console.log(randomWord);
  
  let correctLettersToDisplay = storeState.correctLetters;
  
  console.log(correctLettersToDisplay)
  return (
    <div
      style={{
        width: "75%",
        marginBottom: "50px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
      }}
    >
      {randomWord?.split("")?.map((actualLetter: string, index: number) => (
        <div
          key={index}
          style={{
            padding: "20px",
            fontSize: "35px",
            borderBottom: "4px solid white",
            backgroundColor: "transparent",
            color:"white",
            height:"20px",
            width:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          { isWin  ? actualLetter : correctLettersToDisplay.includes(actualLetter.toLowerCase())  ?  actualLetter : "" }
        </div>
      ))}
    </div>
  );
}
