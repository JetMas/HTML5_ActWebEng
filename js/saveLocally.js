function saveData(){
  if(typeof(Storage) !== undefined){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    console.log(fname);

    if( fname==null || fname=="" || fname==" " || lname==null || lname=="" || lname==" " || email==null || email=="" || email==" " || phoneNumber==null || phoneNumber=="" || phoneNumber==" "){
      document.getElementById("formStatus").innerHTML = "Please fill all the required fields";
    }
    else {
      localStorage.setItem("fname",fname);
      localStorage.setItem("lname",lname);
      localStorage.setItem("email",email);
      localStorage.setItem("phoneNumber",phoneNumber);
      //localStorage.setItem("streetAddress",document.getElementById("streetAddress").value);
      //localStorage.setItem("state",document.getElementById("state").value);
      //localStorage.setItem("postalCode",document.getElementById("postalCode").value);
      document.getElementById("formStatus").innerHTML = "Data saved";
    }
  }
  else {
    document.getElementById("formStatus").innerHTML = "Sorry, your browser does not support Web Storage.";
  }
}

$( document ).ready(function() {
  if(typeof(Storage) !== undefined){
    document.getElementById("fname").value = localStorage.getItem("fname");
    document.getElementById("lname").value = localStorage.getItem("lname");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("phoneNumber").value = localStorage.getItem("phoneNumber");
  }
});
