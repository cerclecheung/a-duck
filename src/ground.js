import "aframe";
import "aframe-animation-component";
import React from "react";
import { Entity } from "aframe-react";

class Ground extends React.Component {
  render() {
    return (
      <Entity
        primitive="a-box"
        depth="50"
        width="50"
        height="1"
        color="#ab7c30"
        position="0 -0.5 0"
      />
    );
  }
}
export default Ground;
