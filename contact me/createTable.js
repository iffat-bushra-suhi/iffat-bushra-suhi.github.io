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
const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "hhbgLHV1RvbhrMdKkZ35NrO7uVi2") {
      createTable();
    } else {
      document.location.href = "contact1.html";
    }
  } else {
    document.location.href = "contact.html";
  }
});

var refUser = "admin";
var userRef = firebase.database().ref(refUser);


function createTable() {
  var table = document.getElementById('table_body');

  var ref = "messages";
  var emailsRef = firebase.database().ref(ref);

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
	  
      cell1.innerHTML = alldata[index].name;
      cell2.innerHTML = alldata[index].email;
      cell3.innerHTML = alldata[index].message;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}