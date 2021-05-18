var firebaseConfig = {
    apiKey: "add api key",
    authDomain: "registration-form-52626.firebaseapp.com",
    projectId: "registration-form-52626",
    storageBucket: "registration-form-52626.appspot.com",
    messagingSenderId: "352935736558",
    appId: "add appid",
    measurementId: //Add id
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  //reffrence for mesage collection
  var messref= firebase.database().ref('messages');

//listen for form
document.getElementById('contactform').addEventListener('submit',submitForm);


//submit form
function submitForm(e){
	e.preventDefault();
	
	var name=getinputVal('name');
	var company=getinputVal('company');
	var email=getinputVal('email');
	var phone=getinputVal('phone');
	var message=getinputVal('mess');
	
	savemess(name,company,email,phone,message);
	
	//show alert
	
	document.querySelector('.alert').style.display='block';
	
	//hide alert afetr 3 sec
	setTimeout(function(){
		document.querySelector('.alert').style.display='none';
	},3000)
	
	document.getElementById('contactform').reset();
	
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



//fun to get form values

function getinputVal(id){
	return document.getElementById(id).value;
}

function savemess(name,company,email,phone,message){
	var Newmessref=messref.push();
	Newmessref.set({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	});
}
