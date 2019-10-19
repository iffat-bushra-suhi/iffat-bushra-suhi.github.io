var firebaseConfig = {
    apiKey: "AIzaSyCG5-JGTLmYAu8LdZ82NsV_kmTJGe109OU",
    authDomain: "aniart-today.firebaseapp.com",
    databaseURL: "https://aniart-today.firebaseio.com",
    projectId: "aniart-today",
    storageBucket: "aniart-today.appspot.com",
    messagingSenderId: "205047761713",
    appId: "1:205047761713:web:4d41907df40e8db61efe10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var btn = document.getElementById("sub-btn");

var logbtn = document.getElementById("logout");




btn.addEventListener("click",abc); 

logbtn.addEventListener("click", signout);
function abc(e)
{
    e.preventDefault();
    var email=document.getElementById("inputEmail").value;
    var pass=document.getElementById("inputPassword").value;
    //console.log(email,pass);
    ///firebase.auth()
          //.createUserWithEmailAndPassword(email, pass)
			   
           //.catch(function(error) {
         //Handle Errors here.
       //var errorCode = error.code;
       //var errorMessage = error.message;
      });
      console.log("users have been signed up");
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.email);
      // ...
    } else {
      // User is signed out.
      console.log("no user");
      // ...
    }
  });


function signout()
{
firebase.auth()
    .signOut()
    .then(function() {
        console.log("logged out");
}).catch(function(error) {
// An error happened.
});
  }

  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  