
function currentDate(){
  var date = new Date();
  postMessage(date.toString());
  setTimeout("currentDate()", 1000);
}

currentDate();
