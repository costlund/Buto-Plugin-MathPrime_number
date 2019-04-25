function PluginMathPrime_number(){
  this.isEven = function(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  this.isOdd = function(n) {
    return this.isEven(Number(n) + 1);
  }      
  this.isInt = function(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }
  this.isPrimeNumber = function(i){
    var r = true;
    if(this.isOdd(i)){
      for(var j=2; j<i/2; j++){
        /**
         * Check all odd values from 2 to i/2.
         */
        if(this.isInt(i/j)){
          /**
           * If any is numeric it´s not a Prime number.
           */
          r = false;
          break;
        }
      }
    }else{
      /**
       * Even value is never Prime number.
       */
      r = false;
    }
    return r;
  }
}
var PluginMathPrime_number = new PluginMathPrime_number();
