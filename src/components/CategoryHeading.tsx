import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {faker} from'@faker-js/faker';
import { useAppSelector } from '../redux/hooks';
import { Typography } from '@mui/material';


export default function CategoryHeading() {

  const storeState:any  = useAppSelector(state => state.guessword)
  const random_category:any  = storeState?.randomCategory

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        boxSizing:"border-box",
        marginBottom:8
      }}
      noValidate
      autoComplete="off"
    >
      <Typography   sx={{color:"black",fontWeight:"bold",fontSize:"30px",borderRadius:"10px",textAlign:"center",border:"3px inset #7743db"}}>

{random_category}

      </Typography>
   
    </Box>
  );
}