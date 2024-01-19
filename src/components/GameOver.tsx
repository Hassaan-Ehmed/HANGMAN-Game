import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image_wrong from '../images/wrong.png'
import image_correct from '../images/correct.png'
import MUIButton from './MUIButton';

export default function GameOver() {
  return (
    

    <div style={{
        height:"45%",
        width:"50%",
        backgroundColor:"#C3ACD0",
        display:"grid",
        placeItems:"center"
    }}>

<Card sx={{ width: 600}} elevation={6}>
     

     <div  style={{height:"20%",width:"100%"}}>

     <img
        style={{ height: "35vh" , width:"100%",objectFit:"contain"}}
        src={image_correct}
        alt="green iguana"
      />
     </div>


     <div  style={{height:"30%"}}>



      <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{

textAlign:"center"

        }}>
       You Win !
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
   <MUIButton />

      </CardActions>


      
</div>


    </Card>
    </div>
  );
}