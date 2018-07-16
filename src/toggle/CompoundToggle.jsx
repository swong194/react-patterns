import React, { Component } from 'react';
import Switch from '../switch/Switch';

const ToggleContext = React.createContext();

class Toggle extends Component {
  static switch = () => (
    <ToggleContext.Consumer>
      {
        ({ on, onClick, ...props}) =>
          <Switch on={on} onClick={onClick} {...props} />
      }
    </ToggleContext.Consumer>
  );

  static title = () => (
    <ToggleContext.Consumer>
      {
        ({ title }) =>
          title ? <h2>{title}</h2> : null
      }
    </ToggleContext.Consumer>
  );

  static log = (isOn, title) =>
    console.log(`the ${title} toggle is ${isOn ? 'on' : 'off'}`);

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        Toggle.log(this.state.on, this.props.title);
      }
    );

  state = { on: false, onClick: this.toggle, title: this.props.title };

  render() {
    return <ToggleContext.Provider value={this.state}>
      {this.props.children}
    </ToggleContext.Provider>
  }
}

export default Toggle;