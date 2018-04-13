
function currentDate(){
  var date = new Date();
  postMessage(date.toString());
  setTimeout("timedCount()", 1000);
}

currentDate();
