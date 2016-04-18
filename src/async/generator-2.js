var Request = require('request');
var Promise = require('bluebird');

function getDog(g){
  var o = {
    url: 'https://morpheus.stamplayapp.com/api/cobject/v1/dog',
    method: 'get',
    json: true
  };
  Request(o, function(e, r , b){
    g.next(b);
  });
}

function* genDog(){
  var o = yield getDog(g);
  console.log('o:', o);
}

var g = genDog();
g.next();
