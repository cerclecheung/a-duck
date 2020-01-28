import React from "react";
import "aframe";
import "aframe-animation-component";
import { Entity } from "aframe-react";

class Queue extends React.Component {
  render() {
    return (
      <Entity id="queue">
        <Entity
          id="avacado-x-1"
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="3 -0 -7"
          animation={{
            property: "rotation",
            dur: "1500",
            dir: "alternate",
            loop: "true",
            from: "-80,0,0",
            to: "80,0,0"
          }}
        />
        <Entity
          id="avacado-x-1"
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="3 -0 -6"
          animation={{
            property: "rotation",
            dur: "1500",
            dir: "alternate",
            loop: "true",
            from: "-80,0,0",
            to: "80,0,0"
          }}
        />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="3 0 -5"
          animation={{
            property: "rotation",
            dur: "1500",
            dir: "alternate",
            loop: "true",
            from: "-80,0,0",
            to: "80,0,0"
          }}
        />
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"
          scale="10 10 10"
          position="3 0 -4"
          animation={{
            property: "rotation",
            dur: "1500",
            dir: "alternate",
            loop: "true",
            from: "-80,0,0",
            to: "80,0,0"
          }}
        />
      </Entity>
    );
  }
}
export default Queue;
