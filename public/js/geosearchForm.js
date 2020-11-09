/* Aparentemente as variáveis em var precisam estar em var. Ainda não testei com const.
Não executar o prettier por enquanto, capaz de mudar tais coisas.*/

var GeoSearchControl = window.GeoSearch.GeoSearchControl;
var OpenStreetMapProvider = window.GeoSearch.OpenStreetMapProvider;

var provider = new OpenStreetMapProvider({ params: { countrycodes: 'br' } });

var searchControl = new GeoSearchControl({
  provider: provider,
  style: 'bar',
  searchLabel: 'Insira a localização da estação',
  showMarker: true,
  marker: {
    icon: new L.Icon.Default(),
  },
  autoClose: true,
  autoComplete: true,
  autoCompleteDelay: 400, // optional: number      - default 250
});

var map = new L.Map('mapid').setView([-23.554, -46.6333], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.addControl(searchControl);

const form = document.querySelector('form');
const div = form.querySelector('div[class="form-group address"]');
const input = div.querySelector('input[type="text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  var results = await provider.search({ query: input.value });

  results.forEach(function (result) {
    delete result.label;
    delete result.bounds;
    delete result.raw;
  });

  console.log(results);
});
