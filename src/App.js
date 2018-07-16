import React, { Component } from 'react';
import CompoundComponent from './Compound/Compound.jsx';
import RenderPropsComponent from './RenderPropsComponent/RenderPropsComponent.jsx';

class App extends Component {
  render() {
    return (
      <section>
        <CompoundComponent title='Compund Component' />
        <RenderPropsComponent title='RenderProps Component' />
      </section>
    )
  }
}

export default App;
