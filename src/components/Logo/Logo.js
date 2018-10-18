import React from 'react';
import Tilt from 'react-tilt';
import logo2 from './logo2.png';
import './logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0 pa 2'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 180, width: 180 }} >
            <div className="Tilt-inner pa3" ><img alt='logo' src={logo2}/>
            </div>
            </Tilt>
        </div>
    )
      
}
export default Logo;