     var map;
     var infowindow;

     function initMap() {
      var hotels = {lat: 46.9667, lng: 11.0000};

      map = new google.maps.Map(document.getElementById('map'), {
        center: hotels,
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: hotels,
        radius: 500,
        types: ['hotel']
      }, callback);
     }

     function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
     }
     function createMarker(place) {
      var placeLoc = place.geometry.location;
      var contentString = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h5 id="firstHeading" class="firstHeading"<p><a target="_blank" href="http://www.google.com/search?q='+place.name+'+trip+advisor">'+place.name+'</a></p></h5>'+
               '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        infowindow.open(map, this);
      });
     }
