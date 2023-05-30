import React from 'react';

const ButtonComponent = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
        }}
      >
        Company Details
      </button>
      <button
        style={{
          backgroundColor: '#008CBA',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
        }}
      >
        User Details
      </button>
    </div>
  );
};

export default ButtonComponent;