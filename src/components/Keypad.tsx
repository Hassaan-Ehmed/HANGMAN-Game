import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Grid, IconButton } from "@mui/material";
import CategoryHeading from "./CategoryHeading";
import Placeholder from "./Placeholder";
import guessword, {
  _getCorrectLetters,
  _setImage,
  _setOver,
  _setWin,
} from "../redux/slices/guessword";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import GameFinish from "./GameFinish";
// import {convertedKeyMapping as keyMapping} from '../helperFile'

export default function KeyPad() {
  const dispatch = useAppDispatch();

  const storeState: any = useAppSelector((state: RootState) => state.guessword);
  const [value, setValue] = React.useState<any>([]);
  const [howManyClicks, setHowManyClicks] = React.useState<number>(0);

  const [keyButtons, setkeyButtons] = React.useState<any>(
    storeState?.keyMapping ?? []
  );
  let randomWord = storeState?.randomWord;
  let correctLetters = storeState?.correctLetters;

  console.log("Values By Store", storeState?.randomWord);

  const _handleKeyPress = (     uValue: string,    indexNum: number,     rowNum: number   ) => {

console.log(storeState.correctLetters);

    setHowManyClicks(howManyClicks + 1);

    randomWord?.split("")?.map((letter: string) => {
      if (uValue === letter.toLowerCase()) {
        dispatch(_getCorrectLetters(uValue));
      }
    });

    //🎉 Wining Logic
if (storeState.correctLetters.length === randomWord?.split("")?.length ) {
 
  dispatch(_getCorrectLetters("remove" as any));
  console.log("You Win🎉");
  dispatch(_setWin(true as any));
  dispatch(_setOver(false as any));
  dispatch(_setImage("happy" as string));

  console.log("CorrectLetters Length:  ",storeState.correctLetters,storeState.correctLetters.length)
  console.log("RandomWord Length:  ",randomWord.split(""),randomWord.length)

}

    if (howManyClicks >= 0 && howManyClicks <= 6) {
      setValue(uValue.toLowerCase());
      console.log("User Enter This Letter", uValue);
      console.log("Click no. ", howManyClicks);


// ❌ Incorrect Logic to disabled Button
      let isIncorrect = randomWord
      ?.split("")
      ?.every((eachLetter: string) => uValue !== eachLetter.toLowerCase());

    if (isIncorrect) {
      let temp_state: any = JSON.stringify(keyButtons);
      temp_state = JSON.parse(temp_state) as any;

      let currentRow = temp_state[rowNum];

      currentRow[indexNum] = {
        ...currentRow[indexNum],
        bool: true,
      };

      temp_state[rowNum] = currentRow;


      setkeyButtons(temp_state);

      console.log(keyButtons);

      dispatch(_setImage("" as any));
    }
  
    } else {
      dispatch(_getCorrectLetters("remove" as any));
      dispatch(_setWin(false as any));
      dispatch(_setOver(true as any));
      dispatch(_setImage("sad"));
      // dispatch(_setImage("reset" as any))
    }
  };

  return (
    <Grid
      container
      columns={12}
      sx={{
        width: "90%",
        height: "45%",
        bgcolor: "lightgrey",
        padding: "20px",
        borderRadius: "15px",

        boxShadow: "-1px 18px 60px -17px black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      {keyButtons.map((row: any, rowNum: any) =>
        row.map((item: any, index: any) =>
          item.bool === true ? (
            <IconButton
              disabled={true}
              key={index}
              sx={{
                bgcolor: "#ea0404",
                width: "50px",
                height: "75px",
                borderRadius: "5px",
                border: "2px solid red",
                boxShadow: "0px 0px 0px 0px black",
                ":active": { opacity: 1 },
                ":hover": { opacity: 1, bgcolor: "#ea0404" },
              }}
              onClick={() => _handleKeyPress(item?.keyName, index, rowNum)}
            >
              <span
                style={{ fontSize: "30px", fontWeight: "bold", color: "red" }}
              >
                {item?.keyName}
              </span>
            </IconButton>
          ) : (
            <>
              <IconButton
                key={index}
                sx={{
                  bgcolor: "#2f2f2f",
                  width: "66.5px",
                  height: "75px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":active": { opacity: 1 },
                  ":hover": { opacity: 1, bgcolor: "#1e1e1e" },
                }}
                onClick={() => _handleKeyPress(item?.keyName, index, rowNum)}
              >
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item?.keyName}
                </span>
              </IconButton>
            </>
          )
        )
      )}
    </Grid>
  );
}
