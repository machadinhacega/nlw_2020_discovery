// create map
const map = L.map("mapid").setView([-3.7428317,-38.5422904], 15);
// setView: ([latitude,longitude],zoom)


// create and add titleLayer
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./files/assets/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Abrigo Tia Júlia <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./files/assets/images/arrow-white.svg"> </a>')



// create and add Marker
L
.marker([-3.7428317,-38.5422904],{icon})
.addTo(map)
.bindPopup(popup)
