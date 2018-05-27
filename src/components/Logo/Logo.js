import React from 'react';
import  Tilt from 'react-tilt';
import './Logo.css';
import Brain from './brain.png';

const Logo =()=>{
  return(
      <div className='mt0 ma4'>
        <Tilt className="Tilt br2 shadow-3" options={{ max : 65}} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3"> <img alt='logo' src={Brain}/> </div>
        </Tilt>
      </div>
  );
}


export default Logo;
