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

// an array of values
Promise.all([get('aapl'),get('msft'),get('goog')])
.then(function(values){
  console.log('values:', values.length);
});

// discrete values
Promise.all([get('aapl'),get('msft'),get('goog')])
.spread(function(s1, s2, s3){
  console.log('s1:', s1.LastPrice);
  console.log('s2:', s2.LastPrice);
  console.log('s3:', s3.LastPrice);
});

// map, filter, reduce
Promise.all([get('aapl'),get('msft'),get('goog')])
.map(function(val, idx, len){
  return Math.round(val.LastPrice);
})
.filter(function(val, idx, len){
  return val > 75;
})
.reduce(function(acc, val, idx, len){
  return acc + val;
}, 0)
.then(function(val){
  console.log('final:', val);
});

// values: 3
// s1: 96.9
// s2: 51.27
// s3: 725.03
// final: 822
