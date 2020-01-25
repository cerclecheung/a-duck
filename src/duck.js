import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import React from "react";
import { Entity } from "aframe-react";

class Duck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", spherePosition: { x: 0, y: 2, z: -1 } };
  }
  render() {
    return <Entity />;
  }
}
export default Duck;
