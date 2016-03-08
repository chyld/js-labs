function makeSquareIterator(){
  return {
    [Symbol.iterator](){
      let x = 1;
      return {
        next(){
          x++;
          let done = x > 10;
          let value = Math.pow(x, 2);
          return {value, done};
        }
      };
    }
  }
}

for(let i of makeSquareIterator()){
  console.log('i:', i);
}

var s = [...makeSquareIterator()];
console.log(s, typeof(s));

let [a, b, ...c] = makeSquareIterator();
console.log('a:', a, 'b:', b, 'c:', c);
