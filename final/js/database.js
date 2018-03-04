var mapbox = document.getElementById('map');
var webcam = document.getElementById('webcam');
var hud = document.getElementById('hud');
var canva = document.getElementsByTagName('canvas');
var account1 = document.getElementById('createAccount');


(function() {

var config = {
   apiKey: "AIzaSyABOlfZiT0ybpXRfstbgKh5bQgKX91406A",
   authDomain: "laatsmapproject.firebaseapp.com",
   databaseURL: "https://laatsmapproject.firebaseio.com",
   projectId: "laatsmapproject",
   storageBucket: "laatsmapproject.appspot.com",
   messagingSenderId: "160734334282"
 };
 firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtName = document.getElementById('txtName');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

var scoreField = document.getElementById('scoreField');
var score;
var userName;
var name = document.getElementById('namefield');


btnLogin.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.updateProfile({

      }).then(function() {
      userName = user.displayName;
      score = user.photoURL;
      scoreField.innerHTML = userName + "'s score is " + score + "!";
      namefield.innerHTML = userName;
      }).catch(function(error) {
      // An error happened.
      });
    } else {
      // No user is signed in.
    }
  });
  promise.catch(e => console.log(e.message));
});



btnSignUp.addEventListener('click', e=> {


  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, pass);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.updateProfile({

      displayName: txtName.value,
      photoURL: txtName.value



      }).then(function() {
      userName = user.displayName;
      score = user.photoURL;
      scoreField.innerHTML = userName + "'s score is " + score + "!";
      namefield.innerHTML = userName;
      }).catch(function(error) {
      // An error happened.
      });
    } else {
      // No user is signed in.
    }
  });



  promise.catch(e => console.log(e.message));

});



btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});



firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    console.log(user);
mapbox.style.display = 'block';
hud.style.display = 'block';
account1.style.display = 'none';

userName = user.displayName;
score = user.photoURL;
scoreField.innerHTML = userName + "'s score is " + score + "!";
namefield.innerHTML = userName;


    btnLogout.classList.remove('hide');

  }else{
    console.log('not logged in');
      btnLogout.classList.add('hide');
  }

});


}());
