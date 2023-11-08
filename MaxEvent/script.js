
function maxevent(){
  let a = document.getElementById("event1").value*1;
  let b = document.getElementById("event2").value*1;
  let c = document.getElementById("event3").value*1;
  let d = document.getElementById("event4").value*1;
  let e = Math.max(a,b,c,d);
  let res ="";
  switch (e){
      case a: res="Birthday party event"; break;
      case b: res="Engagement parties"; break;
      case c: res="Corporate event"; break;
      case d: res="Social Gathering event"; break;
  }
  document.getElementById("result").innerHTML="Maximum number of event occured in this month is "+res;
}