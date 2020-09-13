firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Username: " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function getimageHigh(){
	// Creating a reference (for single image)
	var imageRef = firebase.storage().ref('patient_record/high_1.jpg');

	imageRef.getDownloadURL().then(function(url) {
   // Insert url into an <img> tag to "download"
   document.getElementById("high1").src = url;

});

	var imageRef2 = firebase.storage().ref('patient_record/high_2.jpg');

	imageRef2.getDownloadURL().then(function(url) {
   // Insert url into an <img> tag to "download"
   document.getElementById("high2").src = url;

});

	var imageRef3 = firebase.storage().ref('patient_record/high_3.jpg');

	imageRef.getDownloadURL().then(function(url) {
   // Insert url into an <img> tag to "download"
   document.getElementById("high3").src = url;

});

var imageRef4 = firebase.storage().ref('patient_record/high_4.jpg');

	imageRef.getDownloadURL().then(function(url) {
   // Insert url into an <img> tag to "download"
   document.getElementById("high4").src = url;

});
	
	/*
	// Creating a reference (for all images)
	var listRef =firebase.storage().ref('patient_record');
	
	// Find all the prefixes and items.
	listRef.listAll().then(function(res) {
	res.items.forEach(function(itemRef) {
    // All the items under listRef.
	itemRef.getDownloadURL().then(function(url) {
	document.getElementById("demo").innerHTML = url;
	});
	
	});
	});
*/
	
}


function logout(){
  firebase.auth().signOut();
}

