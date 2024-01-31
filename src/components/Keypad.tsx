import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Grid, Icon, IconButton } from "@mui/material";
import CategoryHeading from "./CategoryHeading";
import Placeholder from "./Placeholder";
import guessword, {
  _getCorrectLetters,
  _setImage,
  _setOver,
  _setRandomWord,
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


React.useEffect(()=>{

  console.log("CorrectLetters Length every render...  ",storeState.correctLetters,storeState.correctLetters.length)
  console.log("Random Word every render...  ",storeState.randomWord)


  if( (howManyClicks > 7 ) && ( storeState.correctLetters.length === randomWord?.split("")?.length) ){

    dispatch(_getCorrectLetters("remove" as any));
    dispatch(_setWin(false as any));
    dispatch(_setOver(true as any));
    dispatch(_setImage("sad"));
    // dispatch(_setImage("reset" as any))
  }
  


  

  //🎉 Wining Logic
if ( (storeState.correctLetters.length === randomWord?.split("")?.length) && (howManyClicks < 7)) {
 
  
  console.log("You Win🎉");
  dispatch(_setWin(true as any));
  dispatch(_setOver(false as any));
  dispatch(_setImage("happy" as string));

  console.log("CorrectLetters Length:  ",storeState.correctLetters,storeState.correctLetters.length)
  console.log("RandomWord Length:  ",randomWord.split(""),randomWord.length)


  dispatch(_getCorrectLetters("remove" as any));
}


if(storeState.imgCount === 7){


  dispatch(_getCorrectLetters("remove" as any));
  dispatch(_setWin(false as any));
  dispatch(_setOver(true as any));
  dispatch(_setImage("sad"));

}

},[howManyClicks])


const _handleKeyPress = (     uValue: string,    indexNum: number,     rowNum: number   ) => {
  
if(!storeState.correctLetters.includes(uValue)){

  setHowManyClicks( prevClicks => prevClicks + 1 );

}



    // ✅ Correct Letters 
// console.log("Correct Letters>> ",storeState.correctLetters);



//  Winng Logic

    if (howManyClicks >= 0 && howManyClicks <= 7) {
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
  wrongLetter: true,
};

temp_state[rowNum] = currentRow;


setkeyButtons(temp_state);

console.log(keyButtons);

  dispatch(_setImage("" as any));


}else{

    // ✅ Correct Letters 
    randomWord?.split("")?.map((letter: string) => {
      if (uValue === letter.toLowerCase() && (!storeState.correctLetters.includes(uValue))) {
        dispatch(_getCorrectLetters(uValue));


      }
    });


    // Means Deep Copy of object (Faida ye ke changes deep down ki bhi ho jati hain )
  
let temp_keys = JSON.parse(JSON.stringify(keyButtons));

let myRow = temp_keys[rowNum];

myRow[indexNum] = {
  ...myRow[indexNum],
  correctLetter:true
}

temp_keys[rowNum] = myRow;


setkeyButtons(temp_keys);

}

    }


  };

  return (
    <Grid
      container
  
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
      
(
  <Grid item container spacing={2} style={{
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    gap:"12px"
  }}
  
  key={rowNum}
  >




{

        row.map((item: any, index: any) =>
         
         item.correctLetter === true ? (
        
              <Grid item  
              key={index}
              sx={{
                bgcolor: "transparent",
                borderRadius: "5px",
                width:"3.8vw",
                height:"3.8w",
                border: "3px solid black",
                boxSizing:"border-box",
                cursor:"not-allowed",
                
              }}
              onClick={() => _handleKeyPress(item?.keyName, index, rowNum)}
            >
              <span
                style={{  cursor:"not-allowed", fontSize: "2vw", fontWeight: "bold", color: item.correctLetter === true ? "green" : "red"}}
              >
                {item?.keyName}
              </span>
            </Grid>

          ) :  item.wrongLetter === true ? (


            <Grid item  
            key={index}
            sx={{
              bgcolor: "transparent",
              borderRadius: "5px",
              width:"3.8vw",
              height:"3.8w",
              border: "3px solid black",
              boxSizing:"border-box",
              cursor:"not-allowed",
              
            }}

          >
            <span
              style={{  cursor:"not-allowed", fontSize: "2vw", fontWeight: "bold", color: item.correctLetter === true ? "green" : "red"}}
            >
              {item?.keyName}
            </span>
          </Grid>




          ) : (
            
              <Grid item 
                key={index}
                sx={{
                  bgcolor: "#2f2f2f",
                  borderRadius: "5px",
                  width:"3.8vw",
                  height:"3.8w",
                  cursor: "pointer",
                  // display:"flex",
                  ":active": { opacity: 1 },
                  ":hover": { opacity: 1, bgcolor: "#1e1e1e" },
                }}
                onClick={() => _handleKeyPress(item?.keyName, index, rowNum)}
              >
                <span
                  style={{
                    fontSize: "2vw",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item?.keyName}
                </span>
              </Grid>
         
          )
        )


}

  </Grid>

)      
      
      
      )}
    </Grid>
  );
}
