import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
// import "./motion";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import Ground from "./ground";
import Platform from "./platform";
import Avocado from "./avocado/avocado";
// import { setupObstacles, setupControls, addObstacleTo } from "./motion";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGameStart: false, isGameEnd: false };
  }
  componentDidMount() {
    const AFRAME = window.AFRAME;
    const setStateFunc = () => {
      console.log("did it set state");
      this.setState(prev => {
        prev.isGameStart = true;
        return prev;
      });
    };
    AFRAME.registerComponent("cursor-listener", {
      init: function() {
        console.log("did it init");
        console.log("this.el", this.el);
        this.el.addEventListener("click", function(evt) {
          setStateFunc();
        });
      }
    });
  }

  render() {
    console.log(this.state.isGameStart);
    return (
      <Scene fog="type: linear; color: #a3d0ed; near:5; far:20">
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
        <Ground />
        {/* {!this.state.isGameStart ? (
          <Entity
            cursor-listener
            // text={{ value: `START HERE`, align: "center", size: 1 }}
            primitive="a-box"
            position="0 0 0"
            scale=".4 .4 .4"
          />
        ) : ( */}
        <Entity>
          <Avocado />
          <Platform />
        </Entity>
        )}
        <Entity
          primitive="a-camera"
          player
          keyboard-controls
          rollAxis
          lane-controls
          position="0 0 2.5"
          // animation={{
          //   property: "scale",
          //   startEvents: "fusing",
          //   easing: "easeInQuad",
          //   from: "1 1 1",
          //   to: "0.2 0.2 0.2",
          //   dur: "250"
          // }}
        >
          <Entity
            id="cursor-mobile"
            primitive="a-cursor"
            cursor={{ fuseTimeout: 250, fuse: true }}
            geometry={{
              primitive: `ring`,
              radiusInner: 0.02,
              radiusOuter: 0.03
            }}
            material={{ color: `white`, shader: `flat` }}
            scale="1 1 1"
            // event-set__1={{
            //   _event: "mouseenter",
            //   scale: { x: 1.4, y: 1.4, z: 1.4 }
            // }}
            // event-set__1={{
            //   _event: "mouseleave",
            //   scale: { x: 1, y: 1, z: 1 }
            // }}
            // raycaster={{ far: 50, interval: 1000, objects: `.clickable` }}
          />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#sceneContainer"));
