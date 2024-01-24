import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MUIButton from "./MUIButton";


export default function GameFinish({title,image}:any) {
  return (
    <Card
      sx={{
        width: "90%",
        height: "58%",
        bgcolor: "white",
        borderRadius: "15px",
          display:"flex",
           flexDirection:"column",
           justifyContent:"space-around",
           alignItems:"center",
            
        // boxShadow: "-1px 18px 60px -17px black",
      }}
      elevation={6}
    >
      <div style={{  width: "100%" }}>
        <img
          style={{ height: "200px", width: "100%", objectFit: "contain" }}
          src={image}
          alt="green iguana"
        />
      </div>

      <div style={{ display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"  }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
            }}
          >
           {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MUIButton />
        </CardActions>
      </div>
    </Card>
  );
}
