import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import React from "react";
import { Entity } from "aframe-react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { x: 0, y: 0, z: 0 }
    };
  }

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const movePlayerTo = position => {
      this.setState({ position });
    };
    AFRAME.registerComponent("lane-controls", {
      tick: function(time, timeDelta) {
        var rotation = this.el.object3D.rotation;

        if (rotation.y > 0.1) movePlayerTo({ x: -0.4, y: 0, z: 0 });
        else if (rotation.y < -0.1) movePlayerTo({ x: 0.4, y: 0, z: 0 });
        else movePlayerTo({ x: 0, y: 0, z: 0 });
      }
    });
  }

  render() {
    return (
      <Entity
        id="player"
        ref={this.props.playerRef}
        player
        position={this.state.position}
      >
        <Entity
          gltf-model="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
          scale="0.1 0.1 0.1"
          rotation="0 90 0"
          animation__position={{
            loop: "true",
            dir: "alternate",
            property: "position",
            easing: "easeInOutQuad",
            from: "0 0.5 0.6",
            to: "0 0.525 0.6"
          }}
          animation__radius={{
            loop: "true",
            dir: "alternate",
            property: "scale",
            dur: "1000",
            from: "0.1 0.1 0.1",
            to: "0.11 0.11 0.11"
          }}
        >
          <Entity
            primitive="a-light"
            type="point"
            intensity="1"
            color="#d949f2"
            animation={{
              loop: "true",
              dir: "alternate",
              property: "intensity",
              easing: "easeInOutQuad",
              to: "0.35",
              from: "0.5"
            }}
          />
        </Entity>
      </Entity>
    );
  }
}
export default Player;
