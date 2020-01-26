import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity } from "aframe-react";
import Ducks from "./ducks";

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
        <Entity id="duck-containter" position="0 0.5 -1.5" rotation="-90 0 0">
          <Ducks />
          <Entity id="player" player>
            <Entity
              gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
              scale="0.1 0.1 0.1"
              rotation="0 90 0"
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
                property: "scale",
                dur: "1000",
                from: "0.1 0.1 0.1",
                to: "0.11 0.11 0.11"
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
