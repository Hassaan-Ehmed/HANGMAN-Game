import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { _getCorrectLetters } from "../redux/slices/guessword";
export default function Placeholder() {
  const dispatch = useAppDispatch();

  const storeState: any = useAppSelector((state) => state.guessword);
  const randomWord: string = storeState.randomColor;
  console.log();

  let correctLettersToDisplay = storeState.correctLetters;

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
          {correctLettersToDisplay.map((userCorrectLetter: string) =>
            userCorrectLetter == actualLetter ? actualLetter : ""
          )}
        </button>
      ))}
    </div>
  );
}
