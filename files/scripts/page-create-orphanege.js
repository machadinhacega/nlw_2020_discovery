// create map
const map = L.map("mapid").setView([-3.7428317,-38.5422904], 15);


// create and add titleLayer
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./files/assets/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

// marcando a variavel como let permite q possa alterar futuramente, diferente da const
// iniciando a variavel vazia para modificar futuramente
let marker;

// create and add marker
// função do leaflet: on. O event retorna uma longitude e uma latitude
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng

    // colocando lat e lng no input do html
    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;
    // remove icon
    // se o marker existir ele vai para o map.remove
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})