import React from 'react';
import Navigation from '../../components/Navigation';
import admin from './admin-pic.jpg';
import "../station/styles.css";

const AdminPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${admin})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  return (
    <div className="bg-cover flex flex-col" style={containerStyle}>
      <Navigation />
      <div className="flex flex-col items-center mt-auto pb-12 mb-12">
        {/* Use mt-auto to push the content to the bottom */}
        <h1 className="text-3xl font-bold underline" style={{color: 'red'}}>
                Discord mod
        </h1>
      </div>
    </div>
  );
};

export default AdminPage;
