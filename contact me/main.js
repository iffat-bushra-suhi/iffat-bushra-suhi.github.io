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
 var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  
  var email = getInputVal('email');
  
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="../index.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
