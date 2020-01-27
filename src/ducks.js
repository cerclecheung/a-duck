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
      { time: 0, position: { x: -0.4, y: 0.4, z: -7 } },
      { time: 1000, position: { x: 0, y: 0.4, z: -7 } },
      { time: 2000, position: { x: 0.4, y: 0.4, z: -7 } }
    ];
    let duckNum = 0;
    ducksWithTime.forEach(duck => {
      setTimeout(() => {
        duckNum++;
        this.setState({
          ...this.state,
          ducks: [...this.state.ducks, { ...duck, id: `duck-${duckNum}` }]
        });
      }, duck.time);
    });
    const AFRAME = window.AFRAME;

    const updateDuck = (id, z) => {
      console.log(`Updating duck at ID ${id}`);
      // this.setState(prevState => {
      //   prevState.ducks = prevState.ducks.map(duck => {
      //     console.log(duck.id, id, duck.id === id);
      //     if (duck.id === id) {
      //       duck.position.z = z;
      //       console.log(z, duck);
      //     }
      //     return duck;
      //   });
      //   console.log("in the updateDuck, prevState", prevState);
      //   return prevState;
      // });
      this.setState({});
    };

    const removeDuck = id => {
      console.log(`Rmving diuck at ID ${id}`);
      this.setState(prevState => {
        prevState.ducks = prevState.ducks.filter(duck => duck.id !== id);
        console.log("prevState", prevState);
        return prevState;
      });
    };

    const checkCollide = duckPo => {
      const playerPo = this.props.player.current.props.position;
      console.log(playerPo, duckPo);
      console.log(
        "player position check",
        playerPo.x === Number(duckPo.x) &&
          playerPo.z - 0.1 < Number(duckPo.z) &&
          Number(duckPo.z) < playerPo.z + 0.1
      );
    };

    AFRAME.registerComponent("duck-obstacle", {
      tick: function(time, timeDelta) {
        var position = this.el.object3D.position;
        var id = this.el.id;
        updateDuck(id, Number(position.z));

        if (position.z == 1.5) {
          console.log(`${id}'s z index is 1.5`);
          removeDuck(id);
        }
        checkCollide(position);
      }
    });
  }

  render() {
    console.log("rendering a group of ducks ", this.state);

    return (
      <Entity id="real-container">
        {this.state.ducks.length ? (
          this.state.ducks.map((duck, index) => (
            <Entity
              duck-obstacle
              key={index}
              id={duck.id}
              gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
              scale="0.2 0.2 0.2"
              rotation="0 -90 0"
              shadow
              // position={`${duck.position.x} ${duck.position.y} ${duck.position.z}`}
              animation={{
                property: "position",
                dur: "6000",
                from: `${duck.position.x} ${duck.position.y} ${duck.position.z}`,
                to: `${duck.position.x} ${duck.position.y} ${duck.position.z +
                  8.5}`
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
