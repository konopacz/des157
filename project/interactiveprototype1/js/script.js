var mapbox = document.getElementById('map');
var player = document.getElementById('player');
var webcam = document.getElementById('webcam');
var hud = document.getElementById('hud');
var canva = document.getElementsByTagName('canvas');
var account1 = document.getElementById('accountStuff');
var backtomenu = document.getElementById('backtomenu');
var backtomap = document.getElementById('backtomap');

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
  var marLoc;
  var davisSCC;
  var davisSCC2;
  var image = '../images/star.png';
  var character = '../images/erikhead.png';


  var test = new google.maps.LatLng(38.538411, -34.896872);
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marLoc = {
        lat: position.coords.latitude + 0.00025,
        lng: position.coords.longitude + 0.0003
      };
      davisSCC = {
        lat: 38.539548 - 0.00025,
        lng: -121.751687 - 0.0004
      };
      davisSCC2 = {
        lat: 38.539548 - 0.00045,
        lng: -121.751687 + 0.0003
      };

      var testStar = new google.maps.Marker({

        icon: image,
        position: marLoc,
        map: map
      });

      var star1 = new google.maps.Marker({

        icon: image,
        position: davisSCC,
        map: map
      });
      var star2 = new google.maps.Marker({

        icon: image,
        position: davisSCC2,
        map: map
      });

      // var marker2 = new google.maps.Marker({
      //
      //        icon: character,
      //        position: pos,
      //       map: map
      //      });

      map.setCenter(pos);
      map.setZoom(19);

      testStar.addListener('click', function() {
        mapbox.style.display = "none";
        webcam.style.display = "block";
        player.style.display = "none";
        backtomenu.classList.add('hide');
        backtomap.classList.remove('hide');
        testStar.setMap(null);
      });

      star1.addListener('click', function() {
        mapbox.style.display = "none";
        webcam.style.display = "block";
        player.style.display = "none";
        backtomenu.classList.add('hide');
        backtomap.classList.remove('hide');
        star1.setMap(null);
      });

      star2.addListener('click', function() {
        mapbox.style.display = "none";
        webcam.style.display = "block";
        player.style.display = "none";
        backtomenu.classList.add('hide');
        backtomap.classList.remove('hide');
        star2.setMap(null);
      });



    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }




  function handleLocationError(browserHasGeolocation, marker, pos) {
    marker.setPosition(pos);
    marker.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    marker.open(map);

  }

}