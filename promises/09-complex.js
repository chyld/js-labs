var Promise = require("bluebird");
var Request = require("request");

function rollAsync(sides){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      var rnd = roll(sides);
      if(rnd % 2 === 0){
        resolve(rnd);
      }else{
        reject(new Error('odd: ' + rnd));
      }
    });
  });
}

function roll(sides){
  return Math.floor(Math.random() * sides) + 1;
}

rollAsync(6)
.then(function(v){
  console.log('THEN A.01:', v);
  return rollAsync(6)
      .then(function(v){ console.log('THEN A.02:', v); return rollAsync(6);})
      .then(function(v){ console.log('THEN A.03:', v); return rollAsync(6);})
      .catch(function(e){console.log('CTCH A.04:', e); return rollAsync(6);})
      .then(function(v){ console.log('THEN A.05:', v); return rollAsync(6);})
      .then(function(v){ console.log('THEN A.06:', v); return rollAsync(6);});
})
.catch(function(e){
  console.log('CTCH B.01:', e);
  return rollAsync(6);
})
.then(function(v){
  console.log('THEN C.01:', v);
  return rollAsync(6);
})
.then(function(v){
  console.log('THEN D.01:', v);
  return rollAsync(6);
})
.catch(function(e){
  console.log('CTCH E.01:', e);
})
.finally(function(){
  console.log('FINL F.01.');
});
