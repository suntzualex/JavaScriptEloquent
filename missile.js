// the object missileSystem
missileSystem = {

name: "missileSystem one",
launch: function(command){
  if(command == "now"){
   console.log("launching missiles";
  }else if(command == "takeABreak"){
   console.log("missiles back in silos";
  }else{
   console.log("not a known command, launching anyway...");
  }
};



safeMode = false;

// 2 functions as values
var launchMissiles = function(value){
 missileSystem.launch("now");
};
if(safeMode){
 launchMissiles = function(value) {
  missileSystem("takeABreak");
}


launchMissiles();
