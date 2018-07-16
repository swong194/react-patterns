import React from 'react';
import RenderToggle from '../toggle/RenderToggle';
import Switch from '../switch/Switch.jsx';

const Usage = (props) => {
  return (
    <RenderToggle {...props}>
      {({ on, togglerProps, title, ...props }) => (
        <React.Fragment>
          <h1>{title}</h1>
          <Switch on={on} {...togglerProps} {...props} />
          <h2>{`I AM ${on ? 'ON' : 'OFF'}`}</h2>
        </React.Fragment>
      )}
    </RenderToggle>
  )
}

export default Usage;