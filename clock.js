var canvas = null, ctx = null, radius = 0, grad = 0, ang, num, stopClock = true;
var runningClock = null;
window.onload = function(){

 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 radius = canvas.height / 2;
 ctx.translate(radius, radius);
 radius = radius * 0.90;
 drawClock();
 };

function drawClock() {
  if(stopClock){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }else{
    clearInterval(runningClock);
    alert("clear");
  }
}

/*
  draw the face of the clock
*/
function drawFace(ctx, radius){

     ctx.beginPath();
     ctx.arc(0, 0, radius, 0, 2*Math.PI);
     ctx.fillStyle = 'white';
     ctx.fill();

     grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
     grad.addColorStop(0, '#333');
     grad.addColorStop(0.5, 'white');
     grad.addColorStop(1, '#333');
     ctx.strokeStyle = grad;
     ctx.lineWidth = radius*0.1;
     ctx.stroke();

     ctx.beginPath();
     ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
     ctx.fillStyle = '#333';
     ctx.fill();
}

/*
 Draw the numbers on the clock
*/
function drawNumbers(ctx, radius){

  ctx.font = radius*0.15 + "px arial";
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      for(num= 1; num < 13; num++){
          ang = num * Math.PI / 6;
          ctx.rotate(ang);
          ctx.translate(0, -radius*0.85);
          ctx.rotate(-ang);
          ctx.fillText(num.toString(), 0, 0);
          ctx.rotate(ang);
          ctx.translate(0, radius*0.85);
          ctx.rotate(-ang);
      }
}

/*
 draw the time.
*/
function drawTime(ctx, radius){
     var now = new Date();
     var hour = now.getHours();
     var minute = now.getMinutes();
     var second = now.getSeconds();
     //hour
     hour=hour%12;
     hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
     drawHand(ctx, hour, radius*0.5, radius*0.07);
     //minute
     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
     drawHand(ctx, minute, radius*0.8, radius*0.07);
     // second
     second=(second*Math.PI/30);
     drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

// only start clock handling button is a different matter.
function startClock(){
  handleButton();
  runningClock = setInterval(drawClock, 1000);
  clockStop = false;
}

function stopKlok(){
  clockStop = true;
  console.log("clock stop");
}

function handleButton(){

   var clockButton = document.getElementById("clockButton");
   // set font on button
   setFont(clockButton);
   var start = clockButton.getAttribute("start");
   if(start == "false"){
     clockButton.innerHTML = "Stop Klok";
     clockButton.setAttribute("start","true");
   } else{
     clockButton.innerHTML = "Start Klok";
     clockButton.setAttribute("start","false");
     stopKlok();
   }
}


function setFont(element){

   element.style.font = "italic bold 20px arial,serif";

}
