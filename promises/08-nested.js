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

get('aapl')
.then(function(a){
  console.log('aaa', a.LastPrice);
  return get('msft').then(function(m){
    console.log('mmm', m.LastPrice);
    return get('amzn');
  });
})
.then(function(z){
  console.log('zzz', z.LastPrice);
});
