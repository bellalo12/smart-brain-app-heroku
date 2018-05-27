import React from 'react';


const Navigation =({onRouteChange, isSignedIn})=>{
    if(isSignedIn){
      return(
    <div style={{display:'flex', justifyContent:'flex-end'}}>
    <p className='underline dim f3 pa4 pointer' onClick={()=>onRouteChange('signout')}>Sign Out</p>
    </div>
  );
  } else {
    return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
    <p className='underline dim f3 pa4 pointer' onClick={()=>onRouteChange('signin')}>Sign In</p>
    <p className='underline dim f3 pa4 pointer' onClick={()=>onRouteChange('register')}>Register</p>
    </div>
  );
  }
}


export default Navigation;
