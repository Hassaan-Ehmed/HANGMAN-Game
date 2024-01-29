import * as React from "react";
import CategoryHeading from "./CategoryHeading";
import Placeholder from "./Placeholder";
import  {
  _getCorrectLetters,
  _setImage,
} from "../redux/slices/guessword";
import GameFinish  from "./GameFinish";
import KeyPad from "./Keypad";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import image_wrong from "../images/wrong.png";
import image_correct from "../images/correct.png";





const PlayArea =()=>{
  
const dispatch = useAppDispatch();

const storeState:any = useAppSelector( state =>  state.guessword);
const isWin:boolean = storeState?.isWin;
const isOver:boolean = storeState.isOver;



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
{
  isWin ? ( <GameFinish title={"Well Done 🎉"} image={image_correct}/> )  : isOver  ? (<GameFinish title={"Game Over ☹"} image={image_wrong}/>) :  ( <KeyPad/> )
}
    </div>
  );

    }

    export default PlayArea;