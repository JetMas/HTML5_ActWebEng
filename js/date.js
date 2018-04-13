function currentDate(){
  var date = Date.now();
  postMessage(date.toString());
  setTimeout("timedCount()", 1000);
}

currentDate();
