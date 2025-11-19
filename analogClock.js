/*
Philippe Saxer
19.11.2025
Analog Clock
*/
function updateClock() {//New function
  const now = new Date();//get date
  const seconds = now.getSeconds();//get seconds 
  const minutes = now.getMinutes();//get minutes
  const hours = now.getHours();//get hours

//Calculation for the clock and hands
  const secondegree = (seconds / 60) * 360;
  const minutedegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourdegree = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

  document.querySelector('.second-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${seconddegree}deg)`;
  document.querySelector('.min-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${minutedegree}deg)`;
  document.querySelector('.hour-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${hourdegree}deg)`;
}


updateClock();

setInterval(updateClock, 1000);
