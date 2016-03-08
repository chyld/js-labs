var Promise = require("bluebird");

function timer(ms){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('async:', ms);
      resolve(3);
    }, ms);
  });
}

timer(2000)
.then(function(val){
  console.log('val:', val);
});

// async: 2000
// val: 3
