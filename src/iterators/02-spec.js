function makeSquareIterator(){
  let o = {};
  let x = 1;
  o[Symbol.iterator] = function(){
    return {
      next: function(){
        x++;
        let done = x > 10;
        return {value: Math.pow(x, 2), done: done};
      }
    };
  };
  return o;
}

for(let i of makeSquareIterator()){
  console.log('i:', i);
}
