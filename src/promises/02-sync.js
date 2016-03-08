var Promise = require("bluebird");

function start(){
  return new Promise(function(resolve, reject){
    resolve(1);
  });
}

start()
.then(function(val){
  console.log('1:', val);
})
.then(function(val){
  console.log('2:', val);
  return 3;
})
.then(function(val){
  console.log('3:', val);
})
.then(function(val){
  console.log('4:', val);
})

// 1: 1
// 2: undefined
// 3: 3
// 4: undefined
