import React from 'react';
import './switch.css';

const Switch = ({ on, onClick }) => {
  const className = on ? 'green' : 'red';

  return (
    <div className={className}>
      <p onClick={onClick}>
        Click me!
      </p>
    </div>
  )
}

export default Switch