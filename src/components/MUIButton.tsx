import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../redux/hooks';
import { 
  _getCorrectLetters,
_setImage,
_setKeys,
_setOver,
_setRandomWord,
_setWin

} from '../redux/slices/guessword'
import { faker } from '@faker-js/faker';

export default function MUIButton() {


const dispatch = useAppDispatch();


const _handleRestart=()=>{

  
  dispatch(_setImage("reset"));
  dispatch(_setWin(false));
  dispatch(_setOver(false));
dispatch(_getCorrectLetters("remove" as any ));
dispatch(_setRandomWord())
dispatch(_setKeys());

}



  return (
    <Box>
     
      <div>
       
        <Button variant="contained" size="medium" sx={{
            backgroundColor:"#2CC617",
            ":hover":{
                backgroundColor:"#2CC617",
            },
            ":active":{
                backgroundColor:"#2CC617",
            }
        }}
        
        onClick={_handleRestart}
        
        
        >
          Restart Game
        </Button>
      
      </div>
    </Box>
  );
}