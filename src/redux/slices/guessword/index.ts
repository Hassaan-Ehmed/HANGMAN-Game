import { createSlice } from "@reduxjs/toolkit";

let initialStates = {
  correctLetters: [],
  imgCount: 0,
  randomColor: "",
};

export const guessWordSlice = createSlice({
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
      

        if(action.payload === "reset"){

            state.imgCount = 0;
        }else{

            state.imgCount = state.imgCount + 1;
        }
    },
  },
});

export const { _getCorrectLetters, _setRandomColor, _setImage } =
  guessWordSlice.actions;
export default guessWordSlice.reducer;
