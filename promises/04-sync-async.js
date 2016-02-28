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
      resolve(b);
    });
  });
}

get('aapl')
.then(function(v){
  console.log('1:', v.LastPrice);
})
.then(function(v){
  console.log('2:', v);
  return 'hello';
})
.then(function(v){
  console.log('3:', v);
  return get('amzn');
})
.then(function(v){
  console.log('4:', v.LastPrice);
})

// 1: 96.9
// 2: undefined
// 3: hello
// 4: 555.07
