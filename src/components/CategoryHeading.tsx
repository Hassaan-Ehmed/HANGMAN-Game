import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CategoryHeading() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        boxSizing:"border-box"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField color="secondary" focused disabled sx={{border:"2px solid red",borderRadius:"10px",textAlign:"center"}}
      value={"Animal"}
      />
   
    </Box>
  );
}