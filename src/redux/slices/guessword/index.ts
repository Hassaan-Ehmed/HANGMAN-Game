import { createSlice } from "@reduxjs/toolkit";
import { AnimalModule, faker } from "@faker-js/faker";
import { convertedKeyMapping } from "../../../helperFile";
let initialStates = {
  correctLetters: [],
  keyMapping: convertedKeyMapping,
  imgCount: 0,
  randomWord:"rose",
  randomCategory: "Flower",
  isWin: false,
  isOver: false,
};

export const guessWordSlice: any = createSlice({
  initialState: initialStates,
  name: "guessword",
  reducers: {
    _setKeys: (state: any) => {
      state.keyMapping = convertedKeyMapping;
    },
    _getCorrectLetters: (state: any, action: any) => {
      if (action.payload === "remove") {
         state.correctLetters = [];
      }else{

        state.correctLetters = [...state.correctLetters, action.payload];
      }

      
    },

    _setRandomWord: (state: any) => {
      
      const randomCategories = [
        "Animal",
        "Color",
        "Word",
        "Country",
        "Person's Name",
      ];

      const grabRandomCategory = randomCategories[Math.floor(Math.random() * randomCategories.length)];

      switch (grabRandomCategory) {
        case "Animal":
          const animal = faker.animal.type();

          if (animal.split("").every((x) => x !== " ") && animal.length <= 6) {
            state.randomWord = animal;
            state.randomCategory = grabRandomCategory;
          } else {
            _setRandomWord();
          }
          break;

        case "Color":
          const color = faker.color.human();

          if (color.split("").every((x) => x !== " ") && color.length <= 6) {
            state.randomWord = color;
            state.randomCategory = grabRandomCategory;
          } else {
            _setRandomWord();
          }
          break;

        case "Word":
          const word = faker.word.noun();

          if (word.split("").every((x) => x !== "") && word.length <= 6) {
            state.randomWord = word;
            state.randomCategory = grabRandomCategory;
          } else {
            _setRandomWord();
          }
          break;

        case "Country":
          const country = faker.location.country();

          if (
            country.split("").every((x) => x !== " ") &&
            country.length <= 6
          ) {
            state.randomWord = country;
            state.randomCategory = grabRandomCategory;
          } else {
            _setRandomWord();
          }
          break;

        case "Person's Name":
          const name = faker.person.firstName();

          if (name.split("").every((x) => x !== " ") && name.length <= 6) {
            state.randomWord = name;
            state.randomCategory = grabRandomCategory;
          } else {
            _setRandomWord();
          }
          break;

        default:
         _setRandomWord()
         state.randomCategory = grabRandomCategory;
          break;
      }
    },

    _setImage: (state: any, action: any) => {
      switch (action.payload) {
        case "reset":
          state.imgCount = 0;
          break;

        case "happy":
          state.imgCount =  8;
          break;

        case "sad":
          state.imgCount =  7 ;
          break;

        default:
          state.imgCount = state.imgCount + 1;
      }
    },

    _setWin: (state: any, action: any) => {
      state.isWin = action.payload;
    },
    _setOver: (state: any, action: any) => {
      state.isOver = action.payload;
    },
  },
});

export const {
  _setKeys,
  _getCorrectLetters,
  _setRandomWord,
  _setImage,
  _setWin,
  _setOver,
} = guessWordSlice.actions;

export default guessWordSlice.reducer;
