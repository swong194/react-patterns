import React, { Component } from 'react';
import CompoundComponent from './Compound/Compound.jsx';

class App extends Component {
  render() {
    return (
      <section>
        <CompoundComponent title='Compund Component' />
      </section>
    )
  }
}

export default App;
