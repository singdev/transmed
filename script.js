function toggleNavMenu() {
    document.querySelector('.nav-bar').classList.toggle('show-nav');
}

mapboxgl.accessToken = 'pk.eyJ1Ijoib3JwaGVlIiwiYSI6ImNrY3N3a3IxdDFzdmUyeWx1aDg2amZyZncifQ.PzEdiWnGFTsJ4dLKADBw5Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [9.4279255, 0.411846], // starting position
    zoom: 17
});

var marker = new mapboxgl.Marker()
.setLngLat([9.4279255, 0.411846])
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());