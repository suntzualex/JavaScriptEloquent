

function range(start, end, step){
  
  // returns all values from start up to and including end
  var range = new Array;
  // if step is not given
  if(step == undefined){ step = 1;}
   
  if(step < 0 &&(start > end)){
  for(var i = start; i >= end; i += step){
     range.push(i);
  }
   }else{
  for(var i = start; i <= end; i += step){
     range.push(i);
  }
}
  return range;
}

function sum(numberArray){
  var sum = 0;
  for(var i = 0; i < numberArray.length; i++){
   sum += numberArray[i];
  }
  return sum;
}
