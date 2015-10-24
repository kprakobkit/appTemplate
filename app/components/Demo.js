import React from 'react';

const dom = React.DOM;

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      dom.div(
        { className: 'demo' },
        this.props.message
      )
    );
  }
}

export default Demo;
