async function postStation(body) {
  body.localization = {
    type: 'Point',
    coordinates: [body.longitude, body.latitude],
  };
  delete body.latitude;
  delete body.longitude;

  return fetch('/api/v1/recycling_stations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

document
  .getElementById('station-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target || event.srcElement;
    var formData = new FormData(form);

    postStation(Object.fromEntries(formData)).then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          window.location.href = `/estacao_de_reciclagem.html?id=${data.id}`;
        });
      } else {
        window.alert('E-mail duplicado, erro ao adicionar no banco de dados');
      }
    });
  });
