var Promise = require("bluebird");
var Request = require("request");

function get(symbol){
  symbol = symbol.toUpperCase();

  var o = {
    url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + symbol,
    method: 'get',
    json: true
  };

  return new Promise(function(resolve, reject){
    Request(o, function(e, r, b){
      reject('bad request');
    });
  });
}

get('aapl')
.then(function(v){
  console.log('g1:', v);
})
.catch(function(v){
  console.log('e2:', v);
})
.then(function(v){
  console.log('g3:', v);
  throw new Error('explosion');
})
.catch(function(v){
  console.log('e4:', v);
})
.then(function(v){
  console.log('g5:', v);
})
.catch(function(v){
  console.log('e6:', v);
})

// e2: bad request
// g3: undefined
// e4: [Error: explosion]
// g5: undefined
