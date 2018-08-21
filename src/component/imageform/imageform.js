import React from 'react';
import './imageform.css';
const ImageForm=()=>{
    return(
        <div >
        <p className='f3'>This app will detect faces on the photo</p>
        <div className='center pa3 w-50' >
            <input className='w-70 f5 link ph3 pv2' type="text" />
            <button className='w-30 grow f5 link ph3 pv2 dib white bg-lite-purple'>Detect</button>
        </div>
        </div>

    );
}
export default ImageForm;