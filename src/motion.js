const AFRAME = window.AFRAME;
const POSITION_X_LEFT = -0.5;
const POSITION_X_CENTER = 0;
const POSITION_X_RIGHT = 0.5;
let player_position_index = 1;

function movePlayerTo(position_index) {
  player_position_index = position_index;
  let position = { x: 0, y: 0, z: 0 };
  if (position_index == 0) {
    position.x = POSITION_X_LEFT;
  } else if (position_index == 1) {
    position.x = POSITION_X_CENTER;
  } else {
    position.x = POSITION_X_RIGHT;
  }
  document.getElementById("player").setAttribute("position", position);
}

const setupControls = () => {
  AFRAME.registerComponent("lane-controls", {
    tick: function(time, timeDelta) {
      var rotation = this.el.object3D.rotation;

      if (rotation.y > 0.1) movePlayerTo(0);
      else if (rotation.y < -0.1) movePlayerTo(2);
      else movePlayerTo(1);
    }
  });
};
//obstacles
let obstacleLeft;
let obstacleCenter;
let obstacleRight;

const setupObstacles = () => {
  obstacleLeft = document.getElementById("duck-left");
  obstacleRight = document.getElementById("duck-right");
  obstacleCenter = document.getElementById("duck-center");

  removeObstacle(obstacleLeft);
  removeObstacle(obstacleCenter);
  removeObstacle(obstacleRight);
};
const removeObstacle = obj => {
  obj.parentNode.removeChild(obj);
};

setupControls();

window.onload = function() {
  setupObstacles();
};
