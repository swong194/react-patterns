import React from 'react';
import './switch.css';

const Switch = ({ on, ...props }) => {
  const className = on ? 'green' : 'red';

  return (
    <div className={className}>
      <p {...props}>
        Click me!
      </p>
    </div>
  )
}

export default Switch