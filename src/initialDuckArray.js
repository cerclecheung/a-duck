let initialPo = [
  { x: -0.4, y: 0.4, z: -7 },
  { x: 0, y: 0.4, z: -7 },
  { x: 0.4, y: 0.4, z: -7 }
];

const makingFinalArr = numOfDucks => {
  let num = 0;
  let newArr = [];
  while (num < numOfDucks) {
    const idx = Math.floor(Math.random() * 3);
    newArr.push({ time: num * 1000, position: initialPo[idx] });
    num++;
  }
  return newArr;
};

const duckArrayWithTime = makingFinalArr(100);
export default duckArrayWithTime;

// [
//   ({ time: 0, position: { x: -0.4, y: 0.4, z: -7 } },
//   { time: 1000, position: { x: 0, y: 0.4, z: -7 } },
//   { time: 2000, position: { x: 0.4, y: 0.4, z: -7 } },
//   { time: 3000, position: { x: -0.4, y: 0.4, z: -7 } },
//   { time: 4000, position: { x: 0, y: 0.4, z: -7 } })
// ];
