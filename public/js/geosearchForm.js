/* Aparentemente as variáveis em var precisam estar em var. Ainda não testei com const.
Não executar o prettier por enquanto, capaz de mudar tais coisas.*/

var GeoSearchControl = window.GeoSearch.GeoSearchControl;
var OpenStreetMapProvider = window.GeoSearch.OpenStreetMapProvider;

var provider = new OpenStreetMapProvider();

/*var searchControl = new GeoSearchControl({  Mapa do leaflet preciusa ser instanciado para usar esse treco
  provider: provider,
  autoComplete: true, // optional: true|false  - default true
  autoCompleteDelay: 650, // optional: number      - default 250
});*/

const form = document.querySelector('form');
console.log(form);
const div = form.querySelector('div[class="form-group address"]');
console.log(div);
const input = div.querySelector('input[type="text"]');
console.log(input);

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const results = await provider.search({ query: input.value });
  console.log(results); // » [{}, {}, {}, ...]
});
