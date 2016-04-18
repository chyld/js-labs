let gs = genSquare();
gs.next();

function square(x){
  console.log('square -> received:', x);
  setTimeout(function(){
    gs.next(x * x);
  }, 100);
}

function* genSquare(){
  console.log('getSquare -> [start]');
  var x = yield square(2);
  console.log('getSquare -> square(2):', x);
  console.log('getSquare -> [halt]');
}
