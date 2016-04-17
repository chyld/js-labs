const Promise = require('bluebird');

function roll(cb){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      var rnd = Math.floor(Math.random() * 6) + 1;
      resolve(rnd);
    }, 100);
  });
}

roll()
.then(function(val){
  console.log('1:', val);
  return new roll();
})
.then(function(val){
  console.log('2:', val);
});
