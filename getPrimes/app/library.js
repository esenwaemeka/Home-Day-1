'strict'
var file ={}
file.getPrimes = function(max_n) {
  var prime_numbers = [], i,div;
  if (typeof max_n !== 'number' ){
      return 'wrong input';
  }
  else{
    for (i=2; i<= max_n; i++){
      var not_a_prime=false;
        div_loop:for (div=2; div<i; div++){
            if (i%div===0){
              not_a_prime = true;
                break div_loop;
            }
        }
        if (not_a_prime === false){
        prime_numbers.push(i);
      }
    }
  }
  return prime_numbers;
}
module.exports = file;
