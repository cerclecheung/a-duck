import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity } from "aframe-react";

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Entity
        primitive="a-cone"
        id="platform"
        color="#c2984a"
        scale="2 2 2"
        shadow
        position="0 -3.5 -1.5"
        rotation="90 0 0"
        radius-top="1.9"
        radius-bottom="1.9"
        segments-radial="20"
        segments-height="20"
        height="20"
        emissive="#005DED"
        emissive-intensity="0.1"
      >
        <Entity id="tree-containter" position="0 0.5 -1.5" rotation="-90 0 0">
          <Entity id="player" player>
            <Entity
              primitive="a-sphere"
              radius="0.05"
              animation__position={{
                loop: "true",
                dir: "alternate",
                property: "position",
                easing: "easeInOutQuad",
                from: "0 0.5 0.6",
                to: "0 0.525 0.6"
              }}
              animation__radius={{
                loop: "true",
                dir: "alternate",
                property: "radius",
                dur: "1500",
                from: "0.05",
                to: "0.055"
              }}
            >
              <Entity
                primitive="a-light"
                type="point"
                intensity="1"
                color="#d949f2"
                animation={{
                  loop: "true",
                  dir: "alternate",
                  property: "intensity",
                  easing: "easeInOutQuad",
                  to: "0.35",
                  from: "0.5"
                }}
              />
            </Entity>
          </Entity>
        </Entity>
      </Entity>
    );
  }
}
export default Platform;
