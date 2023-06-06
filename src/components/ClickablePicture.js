import React from 'react';
import { useState } from 'react';

function ClickablePicture() {
    const [pic, setPic] = useState("/maxence.png")
    const yoink = () =>{
        if (pic === "/maxence.png"){
            setPic("/maxence-glasses.png");
        }
        else{
            setPic("/maxence.png")
        }
    }
  return (
    <div>
        <img src={pic} onClick={yoink}></img>
    </div>
  )
}

export default ClickablePicture;