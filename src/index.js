import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import Ocean from "./ocean";
import Platform from "./platform";
import Iceberg from "./iceberg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  render() {
    return (
      <Scene>
        <Entity primitive="a-sky" color="#a3d0ed" />
        <Entity
          primitive="a-light"
          type="directional"
          castShadow="true"
          intensity="0.4"
          color="#D0EAF9;"
          position="5 3 1"
        />
        <Entity
          primitive="a-light"
          type="ambient"
          intensity="0.8"
          color="#B4c5ec;"
        />
        {/* <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: "snow", particleCount: 2000 }} /> */}
        <Entity
          text={{ value: "Hello, A-Frame React!", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
        />
        <Ocean />
        <Iceberg />
        <Platform />

        <Entity
          primitive="a-camera"
          player
          keyboard-controls
          rollAxis
          position="0 0 2.5"
          animation={{
            property: "scale",
            startEvents: "fusing",
            easing: "easeInQuad",
            // fill: "backwards",
            from: "1 1 1",
            to: "0.2 0.2 0.2",
            dur: "250"
          }}
        >
          <Entity
            id="cursor-mobile"
            primitive="a-cursor"
            cursor="fuseTimeout: 250; fuse: true"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: white; shader: flat"
            scale="0.5 0.5 0.5"
            raycaster="far: 50; interval: 1000; objects: .clickable"
          />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#sceneContainer"));
