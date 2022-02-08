import React from 'react';
import Pizza from './pizza.jpg';
const Navbar1 = () => {
  return (
    <div>
      <h1 href="/"
        style={{
          backgroundColor: 'black',
          color: 'red',
          textAlign: 'center',
          marginBottom: '0px',
          paddingBottom: '0px',
          height: '50px',
        }}
      >
        Pizza
        <a href='/'>
        <img
          src={Pizza}
          alt='Anything'
          style={{
            float:'right',
            display: 'inline-block',
            height: '50px',
            width: '50px',
            margin: '0px',
            padding: '0px',
          }}
        />
        <span
          style={{
            float:'right',
            display: ' inline-block',
            backgroundColor: 'black',
            color: 'red',
            margin: '0px',
            padding: '0px',
          }}
        >
          Welcome
        </span>
      </a>
      </h1>
     
    </div>
  );
};

export default Navbar1;
