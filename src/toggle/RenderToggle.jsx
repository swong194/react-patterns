import React, { Component } from 'react';
import { Switch } from '../switch/Switch.jsx';

class RenderToggle extends Component {
  static log = (isOn, title) =>
    console.log(`the ${title} toggle is ${isOn ? 'on' : 'off'}`);

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        RenderToggle.log(this.state.on, this.props.title);
      }
    );
  };

  state = { on: false };

  render() {
    const { children, title } = this.props;
    return (
      children({
        on: this.state.on,
        toggle: this.toggle,
        title: title,
        togglerProps: {
          onClick: this.toggle,
          'aria-pressed': this.state.on,
        }
      })
    );
  }
}

export default RenderToggle;