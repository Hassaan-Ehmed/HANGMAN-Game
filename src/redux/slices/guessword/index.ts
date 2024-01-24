import { createSlice } from "@reduxjs/toolkit";

let initialStates = {
  correctLetters: [],
  imgCount: 0,
  randomColor: "",
  isWin:false,
  isOver:false
  
};

export const guessWordSlice:any = createSlice({
  initialState: initialStates,
  name: "guessword",
  reducers: {
    _getCorrectLetters: (state: any, action: any) => {
      if (action.payload === "remove") {
        state.correctLetters = [];
      }
      state.correctLetters = [...state.correctLetters, action.payload];

      return state;
    },

    _setRandomColor: (state: any, action: any) => {
      state.randomColor = action.payload;
    },

    _setImage: (state: any, action:any ) => {
      

        switch(action.payload){

          case "reset":
            state.imgCount = 0;
        break;
        
        case "happy":
            state.imgCount = 7;
        break;
        
        case "sad":
          state.imgCount = 6;
        break;

      
        default:

            state.imgCount = state.imgCount + 1;
        }
    },

_setWin : (state:any,action:any) => {

state.isWin = action.payload;

} ,



_setOver :(state:any,action:any) => {
  state.isOver = action.payload
}


  },
});

export const { _getCorrectLetters, _setRandomColor, _setImage,_setWin,_setOver } =
  guessWordSlice.actions;
export default guessWordSlice.reducer;
