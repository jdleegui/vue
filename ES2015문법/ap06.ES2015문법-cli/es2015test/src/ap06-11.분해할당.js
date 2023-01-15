/*
 (구조) 분해 할당에 대해서 알아본다.


*/ const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1);
// 두번째 값 무시하기
const [x2, , z2] = points;
console.log(x2, z2);
//객체분해할당
const car = {
  type: 't',
  color: 'S',
  model: 2017,
};

//ES5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

//객체 분해 할당 사용
const [type2, color2, model2] = car;
console.log(type2, color2, model2);
