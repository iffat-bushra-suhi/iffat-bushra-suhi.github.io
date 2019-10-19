 // Your web app's Firebase configuration
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
  const auth=firebase.auth();
  
  var signin_button=document.getElementById('sub-btn');

var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "../index.html?Login=Successful";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});