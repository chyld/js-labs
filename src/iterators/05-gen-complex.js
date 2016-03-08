require("babel-polyfill");

function makeFactorialGenerator(){
  function factorial(n){
    if(n === 0)
      return 1;
    return n * factorial(n - 1);
  }

  let x = 1;

  return {
    [Symbol.iterator]: function*(){
      while(x < 10){
        yield factorial(x);
        x++;
      }
    }
  }
}

for(let z of makeFactorialGenerator()){
  console.log('z:', z);
}
