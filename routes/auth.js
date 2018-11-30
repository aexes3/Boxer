// Initialize Firebase
var config = {
    apiKey: "AIzaSyCwh82TllCfD1JUO7YhzGZKT6pVH-HJzbQ",
    authDomain: "boxer-80df3.firebaseapp.com",
    databaseURL: "https://boxer-80df3.firebaseio.com",
    projectId: "boxer-80df3",
    storageBucket: "",
    messagingSenderId: "554092423820"
};

firebase.initializeApp(config);

var userData = firebase.database();

// Get Elements by ID
 txtEmail = document.getElementById('txtEmail');
 txtPassword = document.getElementById('txtPassword');
 btnLogin = document.getElementById('btnLogin');
 btnSignUp = document.getElementById('btnSignUp');
 btnLogout = document.getElementById('btnLogout');

// Add login event
btnLogin.addEventListener('click', e => {
    // Get email and pass
     email = txtEmail.value;
     pass = txtPassword.value;
     auth = firebase.auth();
    // Sign in
     promise = auth.signInWithEmailAndPassword(email, pass);
    // Catches error and logs it to the console
    promise.catch(e => console.log(e.message));
});

// Add sign up event
btnSignUp.addEventListener('click', e => {
    // Get email and password
    // Check for real email
     email = txtEmail.value;
     pass = txtPassword.value;
     auth = firebase.auth();
    // Sign in
     promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

// Add a real time listener
// Checks to see if signed in // if not, will either add or remove log out btn
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else {
        console.log('Not logged in.');
        btnLogout.classList.add('hide')
    }
});

// Grabs info from register button to store into newUser object
$('#register').on('click', function (event) {
  // prevent page from refreshing when form tries to submit itself
  event.preventDefault();

  // Capture user inputs and store them into variables
  const newUser = {
   name: $('#inputName').val().trim(),
   password: $('#inputPassword').val().trim(),
   email: $('#inputEmail').val().trim(),
   petsName: $('#inputPetname').val().trim(),
   dogSize: $('#inputDogsize').val(),
   address: [
       $('#inputAddress').val().trim(),
       $('#inputAddress2').val().trim(),
       $('#inputCity').val().trim(),
       $('#inputState').val().trim(),
       $('#inputZip').val().trim()
    ],
   dogGender: $('#inputGender').val(),
   dogBreed: $('#inputBreed').val().trim()
  };

  // Make sure we are receiving the inputs
  console.log(newUser);
  console.log(newUser.address);




// ----------------- Firebase Database starts here ------------------------

  // Pushes user to Database in Firebase
  userData.ref().push(newUser);

});


userData.ref().on('child_added', function(snapshot) {

  console.log(snapshot.val());
});

//     userData.auth().getUser(uid)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });







// More advanced/strict authentication system
//   function toggleSignIn() {
//       if (firebase.auth().currentUser) {
//           firebase.auth().signOut()
//       } else {

//       }
//     }