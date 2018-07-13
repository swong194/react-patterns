import React, { Component } from 'react';
import Switch from '../switch/Switch';

class Toggle extends Component {
  static log = (isOn, title) =>
    console.log(`the ${title} toggle is ${isOn ? 'on' : 'off'}`);

  toggle = () =>
    this.setState(
      currentState => ({ on: !currentState.on }),
      () => {
        Toggle.log(this.state.on, this.props.title)
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