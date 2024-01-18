import React from 'react'

export default function Placeholder() {

  const randomWord = "LION";
  console.log()
   

  return (

<div  style={{ width: "75%",  marginBottom:"50px",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",gap:"25px" }}>


  {

randomWord.split("").map(()=>(

  <button style={{
    padding:"20px",
    fontSize:"30px",
    border:"3px solid black",
    borderTop:"none",
    borderRight:"none",
    borderLeft:"none",
    backgroundColor:"transparent"
 
}}></button>
  
))

  }
    
      </div>
  )
}
