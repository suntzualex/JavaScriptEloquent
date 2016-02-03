// Parameters and scopes
var x = "the outside x variable";

var function1 = function(){
  var x = "var x inside the function1";
  };
  
  // call functionOne
  functionOne();
  console.log(x);
  // -> the outside x variable
  
  var function2 = function(){
   x = "inside functionTwo";
   };
   
   f2();
   console.log(x);
   // -> inside function2
   console.log("the difference of declaring a variable inside a function and just setting it without using the var keyword");
