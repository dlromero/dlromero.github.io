

var map, heatmap;
function initMap() {
    var heatMapData = [
        { location: new google.maps.LatLng(4.719109, -74.031375), weight: 1 },
        { location: new google.maps.LatLng(4.7534889, -74.0378885), weight: 51 },
        { location: new google.maps.LatLng(4.7371475, -74.0308108), weight: 56 },
        { location: new google.maps.LatLng(4.7453291, -74.0394951), weight: 78 },
        { location: new google.maps.LatLng(4.7255574, -74.0322549), weight: 130 },
        { location: new google.maps.LatLng(4.664612, -74.0571459), weight: 49 },
        { location: new google.maps.LatLng(4.7101896, -74.0424098), weight: 30 },
        { location: new google.maps.LatLng(4.7032732, -74.028596), weight: 130 },
        { location: new google.maps.LatLng(4.7666942, -74.0313184), weight: 50 },
        { location: new google.maps.LatLng(4.6693361, -74.0410591), weight: 37 },
        { location: new google.maps.LatLng(4.652518, -74.058304), weight: 2 },
        { location: new google.maps.LatLng(4.6355156, -74.0634685), weight: 57 },
        { location: new google.maps.LatLng(4.665937, -74.0589797), weight: 320 },
        { location: new google.maps.LatLng(4.649656, -74.063097), weight: 258 },
        { location: new google.maps.LatLng(4.6171774, -74.0702045), weight: 85 },
        { location: new google.maps.LatLng(4.6129625, -74.064951), weight: 31 },
        { location: new google.maps.LatLng(4.6112718, -74.0658856), weight: 293 },
        { location: new google.maps.LatLng(4.5800968, -74.0756201), weight: 63 },
        { location: new google.maps.LatLng(4.5902367, -74.0711044), weight: 27 },
        { location: new google.maps.LatLng(4.5695279, -74.0859339), weight: 50 },
        { location: new google.maps.LatLng(4.5783071, -74.0891635), weight: 83 },
        { location: new google.maps.LatLng(4.5663745, -74.1005042), weight: 134 },
        { location: new google.maps.LatLng(4.5489546, -74.0899378), weight: 66 },
        { location: new google.maps.LatLng(4.5420563, -74.0861506), weight: 22 },
        { location: new google.maps.LatLng(4.5203802, -74.0890896), weight: 2 },
        { location: new google.maps.LatLng(4.5383266, -74.1131347), weight: 40 },
        { location: new google.maps.LatLng(4.5095279, -74.1054048), weight: 99 },
        { location: new google.maps.LatLng(4.5056902, -74.10420), weight: 46 },
        { location: new google.maps.LatLng(4.5056683, -74.0984361), weight: 28 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.546443, -74.0560129), weight: 14 },
        { location: new google.maps.LatLng(4.595655, -74.1341231), weight: 200 },
        { location: new google.maps.LatLng(4.5959911, -74.119795), weight: 66 },
        { location: new google.maps.LatLng(4.5972667, -74.171624), weight: 32 },
        { location: new google.maps.LatLng(4.6085126, -74.1769892), weight: 73 },
        { location: new google.maps.LatLng(4.60992, -74.18473), weight: 156 },
        { location: new google.maps.LatLng(4.6431556, -74.1884382), weight: 106 },
        { location: new google.maps.LatLng(4.6323476, -74.185276), weight: 17 },
        { location: new google.maps.LatLng(4.6421586, -74.13023), weight: 41 },
        { location: new google.maps.LatLng(4.6404736, -74.078642), weight: 170 },
        { location: new google.maps.LatLng(4.6186916, -74.1354065), weight: 107 },
        { location: new google.maps.LatLng(4.6439852, -74.1357262), weight: 128 },
        { location: new google.maps.LatLng(4.6217296, -74.1481593), weight: 170 },
        { location: new google.maps.LatLng(4.6171506, -74.152504), weight: 106 },
        { location: new google.maps.LatLng(4.6531372, -74.1616439), weight: 11 },
        { location: new google.maps.LatLng(4.6473068, -74.1635706), weight: 56 },
        { location: new google.maps.LatLng(4.6306047, -74.1599617), weight: 148 },
        { location: new google.maps.LatLng(4.6203163, -74.1770971), weight: 74 },
        { location: new google.maps.LatLng(4.6424068, -74.1597204), weight: 177 },
        { location: new google.maps.LatLng(4.6383548, -74.1707244), weight: 50 },
        { location: new google.maps.LatLng(4.6586284, -74.1095285), weight: 55 },
        { location: new google.maps.LatLng(4.6459769, -74.1128811), weight: 83 },
        { location: new google.maps.LatLng(4.6743153, -74.11394109), weight: 64 },
        { location: new google.maps.LatLng(4.6632358, -74.1166642), weight: 49 },
        { location: new google.maps.LatLng(4.7014128, -74.1444969), weight: 18 },
        { location: new google.maps.LatLng(4.7175369, -74.1031249), weight: 168 },
        { location: new google.maps.LatLng(4.6865667, -74.1542518), weight: 22 },
        { location: new google.maps.LatLng(4.67181, -74.155227), weight: 67 },
        { location: new google.maps.LatLng(4.6682581, -74.1000085), weight: 11 },
        { location: new google.maps.LatLng(4.7014432, -74.114508), weight: 38 },
        { location: new google.maps.LatLng(4.6903416, -74.0801836), weight: 93 },
        { location: new google.maps.LatLng(4.6998742, -74.0895903), weight: 82 },
        { location: new google.maps.LatLng(4.6879363, -74.09732), weight: 92 },
        { location: new google.maps.LatLng(4.6813554, -74.1040428), weight: 47 },
        { location: new google.maps.LatLng(4.7181301, -74.1140818), weight: 42 },
        { location: new google.maps.LatLng(4.7166877, -74.115271), weight: 54 },
        { location: new google.maps.LatLng(4.740226, -74.076881), weight: 36 },
        { location: new google.maps.LatLng(4.7142661, -74.0722394), weight: 11 },
        { location: new google.maps.LatLng(4.7722001, -74.0557154), weight: 43 },
        { location: new google.maps.LatLng(4.7539405, -74.055356), weight: 49 },
        { location: new google.maps.LatLng(4.755021, -74.049298), weight: 89 },
        { location: new google.maps.LatLng(4.740978, -74.096272), weight: 6 },
        { location: new google.maps.LatLng(4.7009368, -74.0554073), weight: 66 },
        { location: new google.maps.LatLng(4.7565431, -74.0678602), weight: 23 },
        { location: new google.maps.LatLng(4.7110392, -74.0706086), weight: 72 },
        { location: new google.maps.LatLng(4.6955899, -74.0716872), weight: 30 },
        { location: new google.maps.LatLng(4.7170226, -74.0733486), weight: 135 },
        { location: new google.maps.LatLng(4.7290939, -74.092795), weight: 250 },
        { location: new google.maps.LatLng(4.7404826, -74.0993608), weight: 120 },
        { location: new google.maps.LatLng(4.663569, -74.087116), weight: 18 },
        { location: new google.maps.LatLng(4.6895163, -74.0671358), weight: 76 },
        { location: new google.maps.LatLng(4.6691052, -74.0744671), weight: 90 },
        { location: new google.maps.LatLng(4.665198, -74.0671545), weight: 185 },
        { location: new google.maps.LatLng(4.6459237, -74.071329), weight: 141 },
        { location: new google.maps.LatLng(4.666132, -74.064605), weight: 192 },
        { location: new google.maps.LatLng(4.6586709, -74.0939604), weight: 55 },
        { location: new google.maps.LatLng(4.6520573, -74.0861774), weight: 37 },
        { location: new google.maps.LatLng(4.6399154, -74.0889174), weight: 60 },
        { location: new google.maps.LatLng(4.6531999, -74.0952813), weight: 42 },
        { location: new google.maps.LatLng(4.6106140, -74.0843757), weight: 278 },
        { location: new google.maps.LatLng(4.6034988, -74.0977614), weight: 58 },
        { location: new google.maps.LatLng(4.5832989, -74.1000404), weight: 44 },
        { location: new google.maps.LatLng(4.5947191, -74.0957181), weight: 200 },
        { location: new google.maps.LatLng(4.6210604, -74.0952281), weight: 56 },
        { location: new google.maps.LatLng(4.645219, -74.0828719), weight: 33 },
        { location: new google.maps.LatLng(4.6037002, -74.1071036), weight: 72 },
        { location: new google.maps.LatLng(4.5991107, -74.1291017), weight: 60 },
        { location: new google.maps.LatLng(4.6272101, -74.1106959), weight: 81 },
        { location: new google.maps.LatLng(4.5991293, -74.0672921), weight: 87 },
        { location: new google.maps.LatLng(4.5813155, -74.0998585), weight: 133 },
        { location: new google.maps.LatLng(4.5843365, -74.1068595), weight: 183 },
        { location: new google.maps.LatLng(4.5698, -74.1191429), weight: 78 },
        { location: new google.maps.LatLng(4.5545314, -74.1168799), weight: 67 },
        { location: new google.maps.LatLng(4.5509315, -74.1068775), weight: 52 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.6293625, -74.1198411), weight: 5 },
        { location: new google.maps.LatLng(4.5413618, -74.1346501), weight: 3 },
        { location: new google.maps.LatLng(4.5062818, -74.1172996), weight: 1 },
        { location: new google.maps.LatLng(4.5743778, -74.1532775), weight: 42 },
        { location: new google.maps.LatLng(4.5698383, -74.1411182), weight: 60 },
        { location: new google.maps.LatLng(4.5537987, -74.1399617), weight: 70 },
        { location: new google.maps.LatLng(4.5375942, -74.1440506), weight: 15 },
        { location: new google.maps.LatLng(4.5884931, -74.1657189), weight: 57 },
        { location: new google.maps.LatLng(4.578195, -74.1550702), weight: 46 }
    ];
    var bogota = new google.maps.LatLng(4.55, -74.11);
    map = new google.maps.Map(document.getElementById('map'), {
        center: bogota,
        zoom: 13
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
    });
    heatmap.setMap(map);
    heatmap.set('radius', heatmap.get('radius') ? null : 60);
}



function RefreshMap() {
    $('#menu1').css({ 'height': ($(window).height() - 265) + 'px' });
    $('#filters').hide();
    setTimeout(function () {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, 'resize');
    }, 200);
}


function ToggleFilters() {
    $('#filters').toggle();
}




function Search() {

    $('#filters').toggle();
    document.getElementById("loader").style.display = "block";

    zona = document.getElementById("Zone").value;
    nivel = document.getElementById("Level").value;
    jornada = document.getElementById("StudyDay").value;
    grado = document.getElementById("grade").value;
    especialidad = document.getElementById("Specialties").value;
    modelos_educativos = document.getElementById("EducationalModel").value;


    var isFalseZona = (zona == 'false');
    var isFalseNivel = (nivel == 'false');
    var isFalseJornada = (jornada == 'false');
    var isFalseGrado = (grado == 'false');
    var isFalseEspecialidad = (especialidad == 'false');
    var isFalseModelos_educativos = (modelos_educativos == 'false');

    query = "$query=select * where codigodepartamento = '11' ";
    if (!isFalseZona) {
        zona = " and zona='" + zona + "'";
    } else {
        zona = '';
    }

    if (!isFalseNivel) {
        nivel = " and niveles like '%25" + nivel + "%25'";
    } else {
        nivel = '';
    }

    if (!isFalseJornada) {
        jornada = " and jornada like '%25" + jornada + "%25'";
    } else {
        jornada = '';
    }

    if (!isFalseGrado) {
        grado = " and grados  like '%25" + grado + "%25'";
    } else {
        grado = '';
    }


    if (!isFalseEspecialidad) {
        especialidad = " and especialidad like '%25" + especialidad + "%25'";
    } else {
        especialidad = '';
    }


    if (!isFalseModelos_educativos) {
        modelos_educativos = " and modelos_educativos like '%25" + modelos_educativos + "%25'";
    } else {
        modelos_educativos = '';
    }


    url = 'https://www.datos.gov.co/resource/xax6-k7eu.json?'
        + query + zona + nivel + grado + jornada + especialidad + modelos_educativos
        + '&$$app_token=K48oToivS8HmR2UDvdG3yrmeJ';

    $.getJSON(url, function (data, textstatus) {

        if (data.length == 0) {
            $("#ResultSearch").html(`<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <div class="alert alert-danger" role="alert">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Información de busqueda:</span>
                            Sin resultados, intente con filtros diferentes
                            </div>
                         </div>`);
        } else {
            var cards = `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <div class="alert alert-info" role="alert">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Información de busqueda:</span>
                            Se encontraron ${data.length} registros
                            </div>
                         </div>`;
            $.each(data, function (i, entry) {

                cards = cards + `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div class="thumbnail">
                                            <div class="caption">
                                                <h3><strong>${ entry.nombreestablecimiento.length > 40 ? entry.nombreestablecimiento.substring(0, 35) : entry.nombreestablecimiento}</strong></h3>
                                                <blockquote>
                                                    <label>Dirección</label>
                                                    <p>${ entry.direccion}</p>
                                                    <div class="collapse" id='${ entry.codigoestablecimiento}'>
                                                        <label>Zona</label>
                                                        <p>${ entry.zona}</p>
                                                        <label>Jornada</label>
                                                        <p>${ entry.jornada}</p>
                                                        <label>Grados</label>
                                                        <p>${ entry.grados}</p>
                                                        <label>Especialidad</label>
                                                        <p>${ entry.especialidad}</p>
                                                        <label>Modelos Educativos</label>
                                                        <p>${ entry.modelos_educativos}</p>
                                                        <label>Ubicación</label>
                                                        <p>${ entry.nombremunicipio}</p>
                                                    </div>
                                                </blockquote>
                                                <p><button class="btn btn-info" role="button" data-toggle="collapse" data-target="#${ entry.codigoestablecimiento}">
                                                <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>                                                
                                                Información</button>
                                                    <button onclick="ChangeTab('${ entry.direccion} Bogotá', '${entry.nombreestablecimiento}')" class="btn btn-warning" role="button">
                                                    <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>                                                                                                    
                                                    Mapa</button>
                                                    <a href="#" class="btn btn-primary" role="button">
                                                    <span class="glyphicon glyphicon-star" aria-hidden="true">
                                                    </span>
                                                </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>`;
            });
            $("#ResultSearch").html(cards);
        }

        document.getElementById("loader").style.display = "none";
    });
}

function ChangeTab(address, schoolName) {

    document.getElementById("loader").style.display = "block";
    var geocoder = new google.maps.Geocoder();


    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {

            originGoogleMaps = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            var marker = new google.maps.Marker({
                position: originGoogleMaps,
                map: map,
                title: schoolName
            });
            var infowindow = new google.maps.InfoWindow({
                content: `<h4>${schoolName}</h4>`
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
            infowindow.open(map, marker);
            var latLng = marker.getPosition(); // returns LatLng object
            map.setCenter(latLng); // setCenter takes a LatLng object
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }

        $('.nav-tabs a[href="#menu1"]').tab('show');
        $('#menu1').css({ 'height': ($(window).height() - 265) + 'px' });
        $('#filters').hide();
        setTimeout(function () {
            zoom = map.getZoom();
            center = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.setZoom(zoom);
            map.setCenter(center);

            google.maps.event.trigger(map, 'resize');
        }, 200);
        document.getElementById("loader").style.display = "none";
    });

}



