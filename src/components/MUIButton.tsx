import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function MUIButton() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
     
      <div>
       
        <Button variant="contained" size="medium" sx={{
            backgroundColor:"#2CC617",
            ":hover":{
                backgroundColor:"#2CC617",
            },
            ":active":{
                backgroundColor:"#2CC617",
            }
        }}>
          Restart Game
        </Button>
      
      </div>
    </Box>
  );
}