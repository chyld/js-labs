require("babel-polyfill");

function makeRandomGenerator(){
  return {
    [Symbol.iterator] : function*(){
      yield Math.random();
      yield Math.random();
      yield Math.random();
    }
  }
}

console.log(...makeRandomGenerator());

for(let i of makeRandomGenerator()){
  console.log('i:', i);
}
