import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import React from "react";
import { Entity } from "aframe-react";

class Ducks extends React.Component {
  render() {
    return (
      <Entity>
        <Entity
          id="duck-left"
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
          scale="0.2 0.2 0.2"
          rotation="0 -90 0"
          shadow
          position="-0.4 0.4 0"
          animation={{
            property: "position",
            dur: "6000",
            from: "-0.4 0.4 -7",
            to: "-0.4 0.4 1.5"
          }}
        ></Entity>
        <Entity
          id="duck-center"
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
          scale="0.2 0.2 0.2"
          rotation="0 -90 0"
          shadow
          position="0 0.4 0"
          animation={{
            property: "position",
            dur: "6000",
            from: "0 0.4 -7",
            to: "0 0.4 1.5",
            easing: "easeInQuad"
          }}
        ></Entity>
        <Entity
          id="duck-right"
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
          scale="0.2 0.2 0.2"
          rotation="0 -90 0"
          shadow
          position="0.4 0.4 0"
          animation={{
            property: "position",
            dur: "6000",
            from: "0.4 0.4 -7",
            to: "0.4 0.4 1.5"
          }}
        ></Entity>
      </Entity>
    );
  }
}
export default Ducks;
