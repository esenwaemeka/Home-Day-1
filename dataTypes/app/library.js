'strict'
var file = {}
file.dataTypes = function(arg){ 
   if (arg === null){
       return 'no value';
   }
   if (arg === undefined){
       return 'no value';
   }
   if (arg === true){
       return true;
   }
   if (arg === false){
       return false;
   }
  
   if (typeof arg === 'string'){
       return arg.length;
   }

   if (typeof arg ==='number' && arg < 100 ){
       return 'less than 100';
   }
   if (typeof arg ==='number' && arg > 100){
       return 'more than 100';
   }
   if (typeof arg ==='number' && arg === 100){
       return 'equal to 100';
   }
   if (typeof arg === 'object' && arg.length > 0){
        return arg[2];
   }
    
   if (typeof arg == 'function') {
        return arg(true);
   }

}
 module.exports = file;