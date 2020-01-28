import React from "react";
import "aframe";
import "aframe-animation-component";
import { Entity } from "aframe-react";

class Stack extends React.Component {
  render() {
    return (
      <Entity id="stack">
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="2 0 -1"
          animation={{
            property: "rotation",
            dur: "1500",
            loop: "true",
            from: "0 0 0",
            to: "0 360 0"
          }}
        />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="2 0.6 -1"
          animation={{
            property: "rotation",
            dur: "1500",
            loop: "true",
            from: "0 0 0",
            to: "0 360 0"
          }}
        />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="2 1.2 -1"
          animation={{
            property: "rotation",
            dur: "1500",
            loop: "true",
            from: "0 0 0",
            to: "0 360 0"
          }}
        />
      </Entity>
    );
  }
}
export default Stack;
