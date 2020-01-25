import "aframe";
import "aframe-google-poly-component";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity, Animation } from "aframe-react";

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Entity id="iceberg">
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          // primitive="a-cone"
          // lowpoly
          // segments-radial="5"
          // segments-height="3"
          // height="1"
          // radius-top="0.15"
          // radius-bottom="0.5"
          position="3 -0.1 -1.5"
        >
          {/* <Animation
            property="rotation"
            from="-5 0 0"
            to="5 0 0"
            repeat="indefinite"
            direction="alternate"
          ></Animation>
          <Animation
            property="position"
            from="3 -0.2 -1.5"
            to="4 -0.2 -2.5"
            repeat="indefinite"
            direction="alternate"
            dur="12000"
            easing="linear"
          ></Animation> */}
        </Entity>
        <Entity
          primitive="a-cone"
          segments-radial="7"
          segments-height="3"
          height=".5"
          radius-top="0.25"
          radius-bottom="0.35"
          position="-3 -0.1 -0.5"
        />
        <Entity
          primitive="a-cone"
          segments-radial="6"
          segments-height="2"
          height="0.5"
          radius-top="0.25"
          radius-bottom="0.25"
          position="-5 -0.2 -3.5"
        />
      </Entity>
    );
  }
}
export default Platform;
