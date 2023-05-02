import React, { Component } from "react";
const higherOrderComponent = (DecoratedComponent) => {
  class HOC extends Component {
    render() {
      return <DecoratedComponent />;
    }
  }
  return HOC;
};
