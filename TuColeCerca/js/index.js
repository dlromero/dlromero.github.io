

var map;
var markers = [];
var originGoogleMaps;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 4.5793682, lng: -74.136635 },
        zoom: 11
    });

    if (originGoogleMaps === undefined) {
        originGoogleMaps = new google.maps.LatLng(4.5793682, -74.136635);
    }

    var iconOrigin = {
        url: "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var markerOrigin = new google.maps.Marker({
        position: originGoogleMaps,
        title: "Origin",
        icon: iconOrigin
    });
    markerOrigin.id = "origin";
    markerOrigin.setMap(map);
    // var arrayDistance = [];

    markers.push(markerOrigin);

    var col1 = new google.maps.LatLng(4.544550, -74.137440);
    var col2 = new google.maps.LatLng(4.546291, -74.084231);
    var col3 = new google.maps.LatLng(4.618209, -74.155750);
    var col4 = new google.maps.LatLng(4.621532, -74.153470);
    var col5 = new google.maps.LatLng(4.577676, -74.138241);

    var markerCol1 = new google.maps.Marker({
        position: col1,
        title: "col1",
    });
    markerCol1.id = "col1";
    var markerCol2 = new google.maps.Marker({
        position: col2,
        title: "col2",
    });
    markerCol2.id = "col2";
    var markerCol3 = new google.maps.Marker({
        position: col3,
        title: "col3",
    });
    markerCol3.id = "col3";
    var markerCol4 = new google.maps.Marker({
        position: col4,
        title: "col4",
    });
    markerCol4.id = "col4";
    var markerCol5 = new google.maps.Marker({
        position: col5,
        title: "col5",
    });
    markerCol5.id = "col5";

    markerCol1.setMap(map)
    markerCol2.setMap(map)
    markerCol3.setMap(map)
    markerCol4.setMap(map)
    markerCol5.setMap(map)
    markers.push(markerCol1);
    markers.push(markerCol2);
    markers.push(markerCol3);
    markers.push(markerCol4);
    markers.push(markerCol5);

    // var col6 = new google.maps.LatLng(4.580651, -74.103401);
    // var col7 = new google.maps.LatLng(4.580651, -74.103401);


    var distance1 = google.maps.geometry.spherical.computeDistanceBetween(originGoogleMaps, col1);
    var distance2 = google.maps.geometry.spherical.computeDistanceBetween(originGoogleMaps, col2);
    var distance3 = google.maps.geometry.spherical.computeDistanceBetween(originGoogleMaps, col3);
    var distance4 = google.maps.geometry.spherical.computeDistanceBetween(originGoogleMaps, col4);
    var distance5 = google.maps.geometry.spherical.computeDistanceBetween(originGoogleMaps, col5);
    // var distance6 = google.maps.geometry.spherical.computeDistanceBetween(origin, col6);
    // var distance7 = google.maps.geometry.spherical.computeDistanceBetween(origin, col7);


    var arrayDistance = [
        { key: 1, val: "col1", dist: distance1, lat: 4.544550, lon: -74.137440 },
        { key: 2, val: "col2", dist: distance2, lat: 4.546291, lon: -74.084231 },
        { key: 3, val: "col3", dist: distance3, lat: 4.618209, lon: -74.155750 },
        { key: 4, val: "col4", dist: distance4, lat: 4.621532, lon: -74.153470 },
        { key: 5, val: "col5", dist: distance5, lat: 4.577676, lon: -74.138241 }
    ];
    arrayDistance = arrayDistance.sort(function (a, b) { return a.dist - b.dist })
    console.log(arrayDistance);


    DeleteMarker(arrayDistance[0].val);


    var iconFinal = {
        url: "https://www.clker.com/cliparts/B/B/1/E/y/r/marker-pin-google.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var myLatlng = new google.maps.LatLng(arrayDistance[0].lat, arrayDistance[0].lon);
    var marker2 = new google.maps.Marker({
        position: myLatlng,
        title: arrayDistance[0].val,
        icon: iconFinal
    });

    marker2.setMap(map)
    markers.push(marker2);


}

function DeleteMarker(id) {
    //Find and remove the marker from the Array
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);

            //Remove the marker from array.
            markers.splice(i, 1);
            return;
        }
    }
};

function geocodeAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            originGoogleMaps = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
                //markers.splice(i, 1);
            }
            markers = [];
            initMap();
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function RefreshMap() {
    $('#menu1').css({ 'height': ($(window).height()-265) + 'px' });
    $('#filters').collapse();
    setTimeout(function () {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, 'resize');
    }, 200);
}
