var Promise = require('bluebird');
var Request = require('request');

function asyncStock(symbol){
  return new Promise((resolve, reject) => {
    Request({url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + symbol, json: true}, (e, r, b) => {
      resolve(b.LastPrice);
    });
  });
}

function asyncDice(num){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let rolls = [];
      for(let i = 0; i < num; i++){
        let roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
      }
      resolve(rolls);
    }, 100);
  });
}

async function play(){
  const r1 = await asyncDice(3);
  const goog = await asyncStock('goog');
  console.log('r1:', r1, 'goog:', goog);

  const symbols = ['amzn', 'msft', 'aapl'];
  for(let i = 0; i < symbols.length; i++){
   let quote = await asyncStock(symbols[i]);
   console.log('stock:', symbols[i], 'quote:', quote);
  }

  let quotes = await Promise.all(symbols.map(s => asyncStock(s)));
  console.log('quotes:', quotes);
}

play();
