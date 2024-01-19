import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {faker} from'@faker-js/faker';


export default function CategoryHeading() {


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
      <TextField  focused sx={{color:"black",fontWeight:"bold",borderRadius:"10px",textAlign:"center",border:"3px inset #7743db"}}
      value={"Guess any Color ?"}
      />
   
    </Box>
  );
}