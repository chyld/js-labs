var Promise = require("bluebird");
var Request = require("request");

function roll(sides){
  return Math.floor(Math.random() * sides) + 1;
}

function get(symbol){
  symbol = symbol.toUpperCase();

  var o = {
    url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + symbol,
    method: 'get',
    json: true
  };

  return new Promise(function(resolve, reject){
    Request(o, function(e, r, b){
      resolve(b);
    });
  });
}

get('aapl')                // return promise (ok)
.then(function(v){
  console.log('G01:', v.LastPrice);  // return undefined (ok)
})
.then(function(v){
  console.log('G02:', v);
  return roll(20);         // return sync value (ok)
})
.then(function(v){
  console.log('G03:', v);
  return new Error('bad'); // return Error object (considered ok)
})
.then(function(v){
  console.log('G04:', v);
  return get('msft');      // returns promise (ok)
})
.catch(function(v){
  console.log('E0A:', v);  // skipped, due to no errors above
})
.then(function(v){
  console.log('G05:', v.LastPrice);
  throw new Error('explosion');      // throws Error object (bad!)
})
.then(function(v){
  console.log('G06:', v);  // skipped
})
.catch(function(v){
  console.log('E0B:', v);  // captures thrown error
});


// G01: 96.9
// G02: undefined
// G03: 16
// G04: [Error: bad]
// G05: 51.27
// E0B: [Error: explosion]
