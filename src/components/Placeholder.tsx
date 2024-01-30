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
  

  if(randomWord.length === correctLettersToDisplay.length){

    console.log(correctLettersToDisplay)
  }
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
        <button
          key={index}
          style={{
            padding: "20px",
            fontSize: "30px",
            border: "3px solid black",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            backgroundColor: "transparent",
          }}
        >
          { isWin  ? actualLetter : correctLettersToDisplay.map((userCorrectLetter: string) =>
            userCorrectLetter === actualLetter.toLowerCase() ? actualLetter : ""
          )}
        </button>
      ))}
    </div>
  );
}
