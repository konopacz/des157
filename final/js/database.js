var player = document.getElementById('player');
var mapbox = document.getElementById('map');
var webcam = document.getElementById('webcam');
var hud = document.getElementById('hud');
var canva = document.getElementsByTagName('canvas');
var account1 = document.getElementById('accountStuff');
var newAccountbtn = document.getElementById('newAccountbtn');
var rtrnAccountbtn = document.getElementById('rtrnAccountbtn');
var backBtn = document.getElementById('backBtn');
var backtomenu = document.getElementById('backtomenu');
var backtomap = document.getElementById('backtomap');
var footer = document.getElementById('footer');
var backtoGame = document.getElementById('backtoGame');
var howToPlay = document.getElementById('howToPlay');

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
  const tapTarget = document.getElementById('tapTarget');


  var scoreField = document.getElementById('scoreField');
  var score = 0;
  var userName;
  var namefield = document.getElementById('namefield');


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
          console.log(score + ' at time of log in');
          scoreField.innerHTML = score;
          namefield.innerHTML = userName;
        }).catch(function(error) {
          // An error happened.
        });
      } else {
        // No user is signed in.
      }
    });
    txtName.classList.add("hide");
    txtEmail.classList.add("hide");
    txtPassword.classList.add("hide");
    btnSignUp.classList.add("hide");
    btnLogin.classList.add("hide");
    rtrnAccountbtn.classList.add("hide");
    backBtn.classList.add("hide");

    promise.catch(e => console.log(e.message));

  });



  btnSignUp.addEventListener('click', e => {


    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    score = 0;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {


        user.updateProfile({

          displayName: txtName.value,
          photoURL: score

        }).then(function() {
          userName = user.displayName;

          console.log(score + ' at time of sign in');


          namefield.innerHTML = userName;
        }).catch(function(error) {
          // An error happened.
        });
      } else {
        // No user is signed in.
      }


    });


    txtName.classList.add("hide");
    txtEmail.classList.add("hide");
    txtPassword.classList.add("hide");
    btnSignUp.classList.add("hide");
    rtrnAccountbtn.classList.add("hide");
    backBtn.classList.add("hide");
    footer.classList.add("hide");
    btnLogin.classList.add("hide");

    promise.catch(e => console.log(e.message));

  });



  btnLogout.addEventListener('click', e => {
    console.log('clicked logout');
    firebase.auth().signOut();
    newAccountbtn.classList.remove("hide");
    rtrnAccountbtn.classList.remove("hide");
    backBtn.classList.add("hide");
    btnLogout.classList.add("hide");
    mapbox.style.display = 'none';
    player.style.display = "none";
    hud.style.display = 'none';
    account1.style.display = 'block';
    newAccountbtn.classList.remove("hide");
    rtrnAccountbtn.classList.remove("hide");
    backBtn.classList.add("hide");
    backtoGame.classList.add('hide');
    btnLogin.classList.add("hide");
    howToPlay.classList.add('hide');

  });

  tapTarget.addEventListener('click', e => {
    console.log('clicked taptarget');
    score = parseFloat(score);

    score += 1;
    console.log(score + ' at time of tapping');
    var user = firebase.auth().currentUser;

    if (user) {
      user.updateProfile({


        photoURL: score

      }).then(function() {
        console.log(score + ' sent to profile');
        score = user.photoURL;
        console.log(score + ' set within the code from the profile');


      }).catch(function(error) {
        // An error happened.
      });
    }
    scoreField.innerHTML = score;
    mapbox.style.display = 'block';
    player.style.zIndex = "100000";
    webcam.style.display = "none";
    hud.style.display = 'block';
    backtomenu.classList.remove('hide');
    backtomap.classList.add('hide');
    footer.classList.add("hide");
  });

  backtomenu.addEventListener('click', function() {
    console.log('clicked back to menu');
    txtName.classList.add("hide");
    txtEmail.classList.add("hide");
    txtPassword.classList.add("hide");
    mapbox.style.display = 'none';
    player.style.display = "none";
    hud.style.display = 'none';
    account1.style.display = 'block';
    newAccountbtn.classList.add("hide");
    rtrnAccountbtn.classList.add("hide");
    backBtn.classList.add("hide");
    btnLogout.classList.remove('hide');
    btnLogin.classList.add("hide");
    backtoGame.classList.remove('hide');
    howToPlay.classList.remove('hide');
  });

  backtoGame.addEventListener('click', function() {
    console.log('clicked back to map');
    account1.style.display = 'none';
    mapbox.style.display = 'block';
    player.style.display = "block";
    player.style.zIndex = "100000";
    webcam.style.display = "none";
    hud.style.display = 'block';
    backtomenu.classList.remove('hide');
    backtomap.classList.add('hide');
    howToPlay.classList.add('hide');

  });

  backtomap.addEventListener('click', function() {
    console.log('clicked back to map');
    mapbox.style.display = 'block';
    player.style.zIndex = "100000";
    webcam.style.display = "none";
    hud.style.display = 'block';
    backtomenu.classList.remove('hide');
    backtomap.classList.add('hide');

  });

  newAccountbtn.addEventListener('click', function() {
    console.log('clicked new account');
    txtName.classList.remove("hide");
    txtEmail.classList.remove("hide");
    txtPassword.classList.remove("hide");
    btnSignUp.classList.remove("hide");
    newAccountbtn.classList.add("hide");
    rtrnAccountbtn.classList.add("hide");
    backBtn.classList.remove("hide");
  });

  rtrnAccountbtn.addEventListener('click', function() {
    console.log('clicked returning account');

    txtEmail.classList.remove("hide");
    txtPassword.classList.remove("hide");
    btnLogin.classList.remove("hide");
    newAccountbtn.classList.add("hide");
    backBtn.classList.remove("hide");
    newAccountbtn.classList.add("hide");
    rtrnAccountbtn.classList.add("hide");
  });

  backBtn.addEventListener('click', function() {
    console.log('clicked back button');
    backBtn.classList.add("hide");
    txtName.classList.add("hide");
    txtEmail.classList.add("hide");
    txtPassword.classList.add("hide");
    btnLogin.classList.add("hide");
    newAccountbtn.classList.remove("hide");
    rtrnAccountbtn.classList.remove("hide");
    btnSignUp.classList.add("hide");
  });



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);

      console.log(score);
      mapbox.style.display = 'block';
      player.style.display = 'block';
      hud.style.display = 'block';
      account1.style.display = 'none';

      userName = user.displayName;


      namefield.innerHTML = userName;
      scoreField.innerHTML = score;

    } else {
      console.log('not logged in ');
    }

  });


}());