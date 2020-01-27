import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import React from "react";
import { Entity } from "aframe-react";
import Ducks from "./ducks";
import Player from "./player";

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerPosition: {} };
    this.playerRef = React.createRef();
  }
  getPlayerPosition(playerPosition) {
    this.setState({ playerPosition });
  }
  render() {
    return (
      <Entity
        primitive="a-cone"
        id="platform"
        color="#c2984a"
        scale="2 2 2"
        shadow
        position="0 -3.5 -1.5"
        rotation="90 0 0"
        radius-top="1.9"
        radius-bottom="1.9"
        segments-radial="20"
        segments-height="20"
        height="20"
        emissive="#005DED"
        emissive-intensity="0.1"
      >
        <Entity id="duck-containter" position="0 0.5 -1.5" rotation="-90 0 0">
          <Ducks player={this.playerRef} />
          <Player
            playerRef={this.playerRef}
            getPlayerPosition={this.getPlayerPosition}
          />
        </Entity>
      </Entity>
    );
  }
}
export default Platform;
