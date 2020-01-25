import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity } from "aframe-react";

class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", spherePosition: { x: 0, y: 2, z: -1 } };
  }
  render() {
    return (
      <Entity
        primitive="a-octahedron"
        detail={0.5}
        radius={0.1}
        position={this.state.spherePosition}
        color="#FAFAF1"
      />
    );
  }
}
export default Ball;
