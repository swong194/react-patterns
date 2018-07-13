import React, { Component } from 'react';
import Toggle from './toggle/Toggle';
import CompoundComponent from './Compound/Compound.jsx';

class App extends Component {
  render() {
    return (
      <section>
        <Toggle title='Regular' />
        <CompoundComponent />
      </section>
    )
  }
}

export default App;
