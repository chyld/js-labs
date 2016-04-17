function roll(cb){
  setTimeout(function(){
    var rnd = Math.floor(Math.random() * 6) + 1;
    cb(rnd);
  }, 100);
}

roll(function(val){
  console.log('val:', val);
});
