import React, { Component } from 'react';
import Switch from '../switch/Switch';

class Toggle extends Component {
  static log = isOn =>
    console.log(`the toggle is ${isOn ? 'on' : 'off'}`);

  toggle = () =>
    this.setState(
      currentState => ({ on: !currentState.on }),
      () => {
        Toggle.log(this.state.on)
      }
    );

  state = { on: false, toggle: this.toggle }

  render() {
    const { title, ...props } = this.props;
    const { on, toggle } = this.state;
    return (
      <React.Fragment>
        {title ? <h2>{this.props.title}</h2> : null}
        <Switch on={on} onClick={toggle} {...props} />
      </React.Fragment>
    )
  }
}

export default Toggle;