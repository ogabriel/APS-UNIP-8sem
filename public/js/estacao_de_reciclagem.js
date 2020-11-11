const stationId = window['id'] || 1; // teste
const boxesIds = ['#plastic', '#metal', '#glass', '#paper', '#electronic'];

async function putMaterialQuantity({ id, bodyRequest, endpoint }) {
  const response = await fetch(`/api/v1/recycling_stations/${id}/${endpoint}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(bodyRequest),
  });

  return response.json();
}

async function getStationData(id) {
  const rstationRequest = await fetch(`/api/v1/recycling_stations/${id}`);
  return await rstationRequest.json();
}

boxesIds.forEach((boxId) => {
  var button = document.querySelector(`${boxId} button`);
  button.onclick = () => {
    var input = document.querySelector(`${boxId} input[name='quantity']`);
    var value = parseInt(input.value);
    if (value && stationId) {
      var material = boxId.replace('#', '');
      putMaterialQuantity({
        id: stationId,
        bodyRequest: { g: value },
        endpoint: `add_${material}`,
      })
        .then((response) => {
          console.log(response);
          getStationData(stationId).then((station) => {
            document.querySelector(
              `${boxId} p.lead`
            ).textContent = `Total: ${station[material]}`;
          });
        })
        .catch(console.error);
    }
  };
});

if (stationId) {
  getStationData(stationId).then((station) => {
    document.querySelector('h1.display-4').textContent = station.name;
    document.querySelector('p#desc').textContent = ``;
    boxesIds.forEach((boxId) => {
      var material = boxId.replace('#', '');
      document.querySelector(
        `${boxId} p.lead`
      ).textContent = `Total: ${station[material]}`;
    });
  });
}
