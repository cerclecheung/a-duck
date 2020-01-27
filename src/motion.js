// import React from "react";
// import ReactDOM from "react-dom";

// // const AFRAME = window.AFRAME;

// //obstacles
// let obstacleLeft;
// let obstacleCenter;
// let obstacleRight;
// let duckContainer;
// let numberOfDucks = 0;
// let templates = [];

// export const setupObstacles = () => {
//   obstacleLeft = document.getElementById("duck-left");
//   obstacleRight = document.getElementById("duck-right");
//   obstacleCenter = document.getElementById("duck-center");
//   // duckContainer = document.getElementById("duck-container");
//   duckContainer = document.getElementById("real-container");
//   templates = [obstacleLeft, obstacleCenter, obstacleRight];

//   removeObstacle(obstacleLeft);
//   removeObstacle(obstacleCenter);
//   removeObstacle(obstacleRight);
// };
// const addObstacle = el => {
//   numberOfDucks++;
//   el.id = `duck-${numberOfDucks}`;
//   duckContainer.appendChild(el);
// };
// export const addObstacleTo = positionIdx => {
//   let template = templates[positionIdx];
//   let newDuck = template.cloneNode(true);
//   // let newDuck = React.cloneElement(template);
//   console.log("new duck", newDuck);
//   addObstacle(newDuck);
// };
// const removeObstacle = obj => {
//   obj.parentNode.removeChild(obj);
// };

// // setupControls();

// // window.onload = function() {
// //   setupObstacles();
// //   addObstacleTo(0);
// // };
