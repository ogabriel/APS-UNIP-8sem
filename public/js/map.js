const map = L.map('mapid').setView([-23.554, -46.6333], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

async function getStations() {
  const res = await fetch('/api/v1/recycling_stations/localizations');
  const data = await res.json();

  return data;
}

async function getStationsSearch(name) {
  const res = await fetch(
    `/api/v1/recycling_stations/localizations?name=${name}`
  );
  const data = await res.json();

  return data;
}

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

function stationIcon(feature, latlng) {
  let myIcon = L.icon({
    iconUrl: './assets/recycling_station.png',
    shadowUrl: './assets/recycling_station.png',
    iconSize: [50, 50], // width and height of the image in pixels
    shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6], // anchor point of the shadow. should be offset
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });

  return L.marker(latlng, { icon: myIcon });
}

let markers;

// Load map with stores
function loadMap(data) {
  let options = {
    onEachFeature: onEachFeature,
    pointToLayer: stationIcon,
  };

  markers = L.geoJSON(data, options).addTo(map);
}

getStations().then((data) => loadMap(data));

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const textSearch = document.getElementById('search-input').value;

    if (
      textSearch &&
      typeof textSearch == 'string' &&
      /[a-zA-Z]+/.test(textSearch)
    ) {
      map.removeLayer(markers);

      getStationsSearch(textSearch).then((data) => loadMap(data));
    }
  });
