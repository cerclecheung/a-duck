import "aframe";
import "aframe-google-poly-component";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity } from "aframe-react";
import Queue from "./queue";
import Stack from "./stack";

class Avocado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Entity id="avocados">
        <Queue />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="-3 -0 -0.5"
          animation={{
            property: "rotation",
            dur: "1500",
            dir: "alternate",
            loop: "true",
            from: "0 0 45",
            to: "0 0 -45"
          }}
        />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="-5 -0 -3.5"
          animation={{
            property: "rotation",
            dur: "1500",
            loop: "true",
            from: "0 0 0",
            to: "0 360 0"
          }}
        />
        <Stack />
      </Entity>
    );
  }
}
export default Avocado;
