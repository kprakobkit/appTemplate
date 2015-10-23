import React from 'react';
import HelloActions from '../actions/HelloActions';
import HelloStore from '../stores/HelloStore';
import {Link} from 'react-router';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = HelloStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HelloStore.listen(this.onChange);
    HelloActions.getGreetings();
  }

  componentWillUnmount() {
    HelloStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let greetings = this.state.greetings;
    return (
      <h1>Hello World, {greetings}</h1>
    );
  }
}
export default Hello;
