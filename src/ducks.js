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
      ducks: {},
      score: 0
    };
  }

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const ducksWithTime = [
      { time: 0, position: { x: -0.4, y: 0.4, z: -7 } },
      { time: 1000, position: { x: 0, y: 0.4, z: -7 } },
      { time: 2000, position: { x: 0.4, y: 0.4, z: -7 } },
      { time: 3000, position: { x: -0.4, y: 0.4, z: -7 } },
      { time: 4000, position: { x: 0, y: 0.4, z: -7 } }
    ];
    let duckNum = 0;
    ducksWithTime.forEach(duck => {
      setTimeout(() => {
        duckNum++;
        this.setState({
          ...this.state,
          ducks: { ...this.state.ducks, [`duck-${duckNum}`]: duck.position }
        });
      }, duck.time);
    });

    // const updateDuck = (id, position) => {
    //   console.log(`Updating duck at ID ${id}`);
    //   this.setState({ ...this.state, [id]: position });
    // };

    // const removeDuck = id => {
    //   console.log(`Rmving diuck at ID ${id}`);
    //   this.setState(prevState => {
    //     console.log("before state", prevState);
    //     const ducks = prevState.ducks;
    //     delete ducks[id];
    //     console.log("after state", prevState);
    //     return prevState;
    //   });
    // };
    let lastHitDuckId = "";
    const checkCollide = (duckId, duckPo) => {
      const playerPo = this.props.player.current.props.position;

      if (
        duckId !== lastHitDuckId &&
        playerPo.x === Number(duckPo.x) &&
        playerPo.z - 0.1 < Number(duckPo.z) &&
        Number(duckPo.z) < playerPo.z + 0.1
      ) {
        lastHitDuckId = duckId;
        console.log("checking if collide", playerPo, duckPo);
        this.setState(prev => {
          prev.score++;
          return prev;
        });
      }
    };

    AFRAME.registerComponent("duck-obstacle", {
      tick: function(time, timeDelta) {
        var position = this.el.object3D.position;
        var id = this.el.id;
        // updateDuck(id, position);

        // if (position.z == 1.5) {
        //   console.log(`${id}'s z index is 1.5`);
        //   // removeDuck(id);
        // }
        checkCollide(id, position);
      }
    });
  }

  render() {
    const ducksObject = this.state.ducks;
    const duckKeys = Object.keys(ducksObject);
    console.log("in the render", this.state);

    return (
      <Entity id="real-container">
        {duckKeys.length ? (
          duckKeys.map((duckKey, index) => (
            <Entity
              duck-obstacle
              key={index}
              id={duckKey}
              gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
              scale="0.2 0.2 0.2"
              rotation="0 -90 0"
              shadow
              animation={{
                property: "position",
                dur: "6000",
                from: `${ducksObject[duckKey].x} ${ducksObject[duckKey].y} ${ducksObject[duckKey].z}`,
                to: `${ducksObject[duckKey].x} ${
                  ducksObject[duckKey].y
                } ${ducksObject[duckKey].z + 8.5}`
              }}
            />
          ))
        ) : (
          <Entity></Entity>
        )}

        <Entity
          text={{ value: `Score : ${this.state.score}`, align: "center" }}
          position={{ x: 0, y: 2, z: 0 }}
        />
      </Entity>
    );
  }
}
export default Ducks;
