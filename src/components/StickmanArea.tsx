import React from "react";
import img0 from "../images/0.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { _setImage } from "../redux/slices/guessword";

export default function StickmanArea() {
  const count: any = useAppSelector((state: RootState) => state.guessword);

  const dispatch = useAppDispatch() 
  const images = [img0, img1, img2, img3, img4, img5, img6];
  console.log(count?.imgCount, count);


  if(count?.imgCount  > 6 ){

    dispatch(_setImage("reset" as any));
  }

  return (
    <div
      style={{
        width: "40%",
        height: "100vh",
        backgroundColor: "#7743DB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "70%",
          width: "90%",
        }}
      >
        <img
          src={images[count?.imgCount]}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
