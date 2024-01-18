import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, IconButton } from '@mui/material';
import CategoryHeading from './CategoryHeading';
import Placeholder from './Placeholder';


export default function KeyPad() {

    const [value,setValue] = React.useState<any>([]);
    const [howManyClicks,setHowManyClicks] = React.useState<number>(0);

    const KeyMapping = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l','z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const _handleClick=(uValue:string)=>{

        
        if(howManyClicks < 8 ){
            
            setValue([...value,uValue]);
            console.log("User Enter This Letter",value)
            
        }
        else{
            console.log("Error: Chances no more",howManyClicks)
            console.log("Your Entered Values",value)
        }
        
        setHowManyClicks( howManyClicks + 1 );
    }
    return (
        

 <div style={{
    width:"50%",
    height:"100vh",
    backgroundColor:"lightpink",
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
     alignItems:"center"
 }}>


<CategoryHeading />

<Placeholder/>


   <ImageList  sx={{ width: "90%", height: "45%",bgcolor:"lightgrey",padding:"20px",borderRadius:"15px" ,boxShadow:"-1px 18px 60px -17px black"}} cols={8} rowHeight={164} >
      {KeyMapping.map((item,index) => (
        <IconButton key={index} 
        sx={{
        bgcolor:"#2f2f2f",
        width:"50x",
        height:"75px",
        borderRadius:"5px"
                ,
        ":active":{  opacity:1 },
        ":hover":{  opacity:1,bgcolor:'#1e1e1e' }
        }} 
        
        
        onClick={()=>_handleClick(item)}
        >
        <span style={{fontSize:"30px",fontWeight:"bold", color:"white"}}>{item}</span>
        </IconButton>
      ))}
    </ImageList>
 </div>
  );
}



