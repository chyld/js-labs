var Promise = require('bluebird');
var Request = require('request');

function dogs(){
  var o = {
    url: 'https://morpheus.stamplayapp.com/api/cobject/v1/dog',
    method: 'get',
    json: true
  };

  return new Promise(function(resolve, reject){
    Request(o, function(e, r , b){
      resolve(b);
    });
  });
}

var f = Promise.coroutine(function*(){
  var d = yield dogs();
  console.log('d:', d);
});

console.log('f:', f);
f();
