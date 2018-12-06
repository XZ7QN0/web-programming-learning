function initMap() {
    // The location of Sunnyvale
    var sunnyvale = {
        lat: 37.336448,
        lng: -121.994846
    };
    // The map, centered at Sunnyvale
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: sunnyvale
        });

    // The info associated to the marker
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Grub Burger Bar</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Grub Burger Bar</b> is definitely the hangout spot for me!</p>' +
        '<p>If anything, you can definitely find me hanging out around here! ' +
        'And not just for the tasty, sweet, hand-spun milkshakes, but  ' +
        'also for their juicy, delicious burgers!</p>' +
        '<p>Find Grub Burger Bar <a href="https://grubburgerbar.com/" target="_blank">' +
        'here</a></p>' +
        '</div>' + '</div>';

    // The container that stores the content for the marker
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // The marker, positioned at Sunnyvale
    var marker = new google.maps.Marker({
        position: sunnyvale,
        map: map
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}
