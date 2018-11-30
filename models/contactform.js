/ Initialize Firebase
           var config = {
               apiKey: "AIzaSyCwh82TllCfD1JUO7YhzGZKT6pVH-HJzbQ",
               authDomain: "boxer-80df3.firebaseapp.com",
               databaseURL: "https://boxer-80df3.firebaseio.com",
               projectId: "boxer-80df3",
               storageBucket: "",
               messagingSenderId: "554092423820"
           };
           firebase.initializeApp(config);

     // Contact form starts here
     var messagesRef = firebase.database().ref('messages');

     // Listen for form submit
     document.getElementById('contactForm').addEventListener('submit', submitForm);

     // Submit form
     function submitForm(e) {
         e.preventDefault();

         // Get values
         var name = getInputVal('name');
         var company = getInputVal('company');
         var email = getInputVal('email');
         var phone = getInputVal('phone');
         var message = getInputVal('message');

         // Save message
         saveMessage(name, company, email, phone, message);

         // Show alert
         document.querySelector('.alert').style.display = 'block';

         // Hide alert after 3 seconds
         setTimeout(function () {
             document.querySelector('.alert').style.display = 'none';
         }, 3000);

         // Clear form
         document.getElementById('contactForm').reset();
     }

     // Function to get get form values
     function getInputVal(id) {
         return document.getElementById(id).value;
     }

   //   Save message to firebase
     function saveMessage(name, company, email, phone, message) {
         var newMessageRef = messagesRef.push();
         newMessageRef.set({
             name: name,
             company: company,
             email: email,
             phone: phone,
             message: message
         });
     }