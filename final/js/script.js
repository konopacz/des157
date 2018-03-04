var mapbox = document.getElementById('map');
var webcam = document.getElementById('webcam');
var hud = document.getElementById('hud');
var canva = document.getElementsByTagName('canvas');
var account1 = document.getElementById('createAccount');

function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [{
        elementType: 'geometry',
        stylers: [{
          color: '#ebe3cd'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#c9b2a6'
        }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#dcd2be'
        }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#ae9e90'
        }]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{
          color: '#dfd2ae'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#a5b076'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#447530'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f1e6'
        }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#fdfcf8'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#f8c967'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#e9bc62'
        }]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{
          color: '#e98d58'
        }]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#db8555'
        }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#b9d3c2'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#92998d'
        }]
      },
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      },
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.


  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38.5547,
      lng: -121.581
    },
    zoom: 15,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    gestureHandling: 'none',
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map'
      ]
    }
  });



  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');


  // currentlocationstuff


  var pos;
  var marker = new google.maps.Marker;

  var test = new google.maps.LatLng(38.538411, -34.896872);
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };


      marker.setPosition(pos);

      marker.setMap(map);
      map.setCenter(pos);
      map.setZoom(20);

      marker.addListener('click', function() {
                mapbox.style.display = "none";
                webcam.style.display = "block";
              });


    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }


  var marker = new google.maps.Marker({
   position: pos,
   map: map,
   title: 'Hello World!'
 });


}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);

}






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

//Add btnLogin
btnLogin.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});



btnSignUp.addEventListener('click', e=> {


  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, pass);

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
// add user info

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




    btnLogout.classList.remove('hide');
  }else{
    console.log('not logged in');
      btnLogout.classList.add('hide');
  }

});


}());
