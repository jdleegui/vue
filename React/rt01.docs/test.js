function func1() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1);

  console.log('func1>>', first);
  console.log('func1>>', others);
}
func1(1, 2, 3, 4, 0);
function func2(...args) {
  var [first, ...others] = args;
  console.log('func2>>', first);
  console.log('func2>>', others);
}
func2(1, 2, 3, 4, 0);
function func3(first, ...others) {
  var firstInES6 = first;
  var othersInEs6 = others;
  console.log('func3>>', firstInES6);
  console.log('func3>>', others);
}
func3(1, 2, 3, 4, 0);

const [iterm1, ...otherItems] = [0, 1, 2];
const { other, ...others } = { one: 1, two: 2, three: 3, four: 4, other: 0 };
console.log('combied>>other', other);
console.log('combined>>others', others);

const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]);
console.log(...cities);

const car1 = {
  type: 't1',
  color: 's1',
  model: 2017,
};
const car2 = {
  type: 't2',
  color: 's2',
  model: 2019,
};
const { type } = car1;
console.log(type);
const func = function ({ type }) {
  console.log(type);
};
func({ ...car1, ...car2 });

const morning = {
  brackfast: '미역국',
  lunch: '삼치구이',
};

const dinner = '스테이크';

const meals = {
  ...morning,
  dinner, // dinner:dinner
};

console.log(meals);
