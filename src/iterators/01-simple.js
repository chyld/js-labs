function smallOdds(){
  let x = 1;
  return {
    next: function(){
      x += 2;
      return {value: x, done: false};
    }
  }
}

let iterator = smallOdds();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
