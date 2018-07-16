import React, { Component } from 'react';
import CompoundToggle from '../toggle/CompoundToggle.jsx';

const Usage = ({...props }) =>
  (
    <CompoundToggle {...props}>
      <CompoundToggle.title />
      <CompoundToggle.switch />
    </CompoundToggle>
  )

export default Usage;