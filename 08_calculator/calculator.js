const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+b,0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b,1);
};

const power = function(x,y) {
  acc = x
  for(let i = 1; i < y; i++){
    acc=acc*x
  }
  return acc;
};

const factorial = function(x) {
  if(x===1 || x===0)
    return 1
  if(x===2)
    return 2
	acc = 2;
  iter = 3;
  while(iter <= x){
    acc=acc*iter;
    iter++;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
