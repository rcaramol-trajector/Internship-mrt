import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import "../station/styles.css";
 



const StationName: React.FC = () => {
  const location = useLocation();

  const getBackgroundImage = () => {
    // Define a function to determine the background image based on the URL
    let backgroundImageUrl = '';

    switch (location.pathname) {
      case '/stations/Guadalupe/in':
        backgroundImageUrl = 'url(https://mrt3.com/images/MRT-2.jpg)';
        break;
      case '/stations/Boni/in':
        backgroundImageUrl = 'url(https://files01.pna.gov.ph/ograph/2021/08/12/081221-nude-runner-along-mrt-3-via-panda-preecs-on-fb.png)';
        break;
      case '/stations/Ayala/in':
          backgroundImageUrl = 'url(https://images.summitmedia-digital.com/spotph/images/2017/11/17/dmrt_7.jpg)';
          break;
      default:
        backgroundImageUrl = 'url(https://images.summitmedia-digital.com/spotph/images/2017/11/17/dmrt_7.jpg)';
    }
    // const backgroundImageUrl = location.pathname === '/stations/Ayala/in' 
    //   ? 'url(https://images.summitmedia-digital.com/spotph/images/2017/11/17/dmrt_7.jpg)'  // Replace with the actual path to the specific image
    //   : 'url()';  // Replace with the default image URL
    return backgroundImageUrl;
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',  // Ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
    backgroundPosition: 'center',  // Center the image within the container
    height: '100vh',  // Set the height of the container to the full viewport height
    display: 'flex',
    flexDirection: 'column', // Ensure child elements stack vertically
    justifyContent: 'flex-start', // Align items to the top
    backgroundColor: 'rgba(120, 90, 200, 0.2)',
};
    return (
      <>
      <Navigation />
        <div className='bg-cover' style={containerStyle}>

        </div>
      </>
        )
    }
export default StationName;