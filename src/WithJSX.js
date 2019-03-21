import React from 'react';


class HelloWithJSX extends React.Component {
    render() {
      return <div>React (with JSX) {this.props.toWhat}</div>;
    }
  }

export default HelloWithJSX;