import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import React from "react";
import { Entity } from "aframe-react";
import { addObstacleTo } from "./motion";

class Ducks extends React.Component {
  constructor() {
    super();
    this.state = {
      ducks: []
    };
  }

  componentDidMount() {
    const ducksWithTime = [
      { time: 0, position: { x: -0.4, y: 0.4, z: 0 } },
      { time: 1000, position: { x: 0, y: 0.4, z: 0 } },
      { time: 2000, position: { x: 0.4, y: 0.4, z: 0 } }
    ];
    let duckNum = 0;
    ducksWithTime.forEach(duck => {
      setTimeout(() => {
        duckNum++;
        this.setState({
          ...this.state,
          ducks: [...this.state.ducks, { ...duck, id: duckNum }]
        });
      }, duck.time);
    });
    const AFRAME = window.AFRAME;

    AFRAME.registerComponent("duck-obstacle", {
      tick: function(time, timeDelta) {
        var position = this.el.object3D.position;
        var id = this.el.id;
        console.log("position", position, id);
      }
    });
  }

  render() {
    console.log("a group of ducks ", this.state);

    return (
      <Entity id="real-container">
        {this.state.ducks.length ? (
          this.state.ducks.map((duck, index) => (
            <Entity
              duck-obstacle
              key={index}
              id={`duck-${duck.id}`}
              gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
              scale="0.2 0.2 0.2"
              rotation="0 -90 0"
              shadow
              // position={`${duck.position.x} ${duck.position.y} ${duck.position.z}`}
              animation={{
                property: "position",
                dur: "6000",
                from: `${duck.position.x} ${duck.position.y} ${duck.position.z -
                  7}`,
                to: `${duck.position.x} ${duck.position.y} ${duck.position.z +
                  1.5}`
              }}
            ></Entity>
          ))
        ) : (
          <div></div>
        )}
      </Entity>
    );
  }
}
export default Ducks;
