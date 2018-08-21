import React from 'react';
import Image from './logo.png';
import './logo.css';
import Tilt from 'react-tilt';
const Logo=()=>{
    return(
        <div id="logobox">
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 <div className="Tilt-inner dib"> <img alt="logo" src={Image}/> </div>
</Tilt>
        </div>

    );
}
export default Logo;