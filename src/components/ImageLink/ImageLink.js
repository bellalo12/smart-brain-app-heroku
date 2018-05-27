import React from 'react';
import './ImageLink.css';


const ImageLink =({onInputChange, onButtonSubmit})=>{
  return(
      <div>
        <p className='f4 tc'>
        {'This smart brain can detect the face in your pictures.  Give it a try !'}
        </p>
        <div className='center'>
        <div className='form center pa3 br3 shadow-5'>
        <input
        className='pa2 f4 center w-70'
        type='tex'
        onChange={onInputChange}/>
        <button
        className='f4 pointer w-30 ph3 pv2 grow bg-light-green dib white'
        onClick={onButtonSubmit}>DETECT</button>
        </div>
        </div>
      </div>
  );
}


export default ImageLink;
