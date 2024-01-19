import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, IconButton } from "@mui/material";
import CategoryHeading from "./CategoryHeading";
import Placeholder from "./Placeholder";
import guessword, {
  _getCorrectLetters,
  _setImage,
} from "../redux/slices/guessword";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export default function KeyPad() {
  const dispatch = useAppDispatch();

  const storeState: any = useAppSelector((state: RootState) => state.guessword);

  const [value, setValue] = React.useState<any>([]);
  const [howManyClicks, setHowManyClicks] = React.useState<number>(0);


  const KeyMapping = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  let reStructred_KEYS = KeyMapping.map((key) => ({
    keyName: key,
    bool: false,
  }));

  let randomWord = storeState.randomColor;

  React.useEffect(() => {
    randomWord?.split("")?.map((letter: string) => {
      if (value === letter) {
        dispatch(_getCorrectLetters(value));
      }
    });

    if (howManyClicks > 0) {
      let isIncorrect = randomWord
        ?.split("")
        ?.every((eachLetter: string) => value !== eachLetter);

      if (isIncorrect) {
        dispatch(_setImage("" as any));
      }
    }
    if (
      storeState.correctLetters.length ===
      randomWord?.split("")?.length - 1
    ) {
      dispatch(_getCorrectLetters("remove" as any));
      console.log("You Win🎉");
    }

    //     //correctLetters ka Array Eik Peechey Chal raha h but why ?
    // console.log(storeState.correctLetters.length , randomWord.split("").length);
  }, [value]);

  console.log("Values By Store", storeState?.randomColor);

  const _handleKeyPress = (uValue: string) => {
    setHowManyClicks(howManyClicks + 1);

    if (howManyClicks >= 0 && howManyClicks <= 7) {
      setValue(uValue);
      console.log("User Enter This Letter", uValue);
      console.log("Click no. ", howManyClicks);
    } else {
      dispatch(_getCorrectLetters("remove" as any));
      alert("Error: Chances no more");
      // dispatch(_setImage("reset" as any))
    }
  };
  return (
    <div
      style={{
        width: "55%",
        height: "100vh",
        backgroundColor: "#F7EFE5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CategoryHeading />

      <Placeholder />

      <ImageList
        sx={{
          width: "90%",
          height: "45%",
          bgcolor: "lightgrey",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "-1px 18px 60px -17px black",
        }}
        cols={8}
        rowHeight={164}
      >
        {reStructred_KEYS.map((item, index) =>
          item.bool === true ? (
            <IconButton
              disabled={true}
              key={index}
              sx={{
                bgcolor: "#ea0404",
                width: "50x",
                height: "75px",
                borderRadius: "5px",
                border: "1.2px solid red",
                ":active": { opacity: 1 },
                ":hover": { opacity: 1, bgcolor: "#ea0404" },
              }}
              onClick={() => _handleKeyPress(item?.keyName)}
            >
              <span
                style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}
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
                  width: "50x",
                  height: "75px",
                  borderRadius: "5px",
                  ":active": { opacity: 1 },
                  ":hover": { opacity: 1, bgcolor: "#1e1e1e" },
                }}
                onClick={() => _handleKeyPress(item?.keyName)}
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
        )}
      </ImageList>
    </div>
  );
}
