const provider = window.geosearch;

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