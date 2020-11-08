async function getData() {
  const res = await fetch('/api/v1/recycling_stations/report');
  const data = await res.json();

  return data;
}

function loadTable(data) {
  const tableBody = document
    .getElementById('table')
    .getElementsByTagName('tbody')[0];

  if (data.electronic) {
    tableInsertRow(tableBody, 'Eletrônicos', data.electronic);
  }
  if (data.glass) {
    tableInsertRow(tableBody, 'Vidros', data.glass);
  }
  if (data.metal) {
    tableInsertRow(tableBody, 'Metal', data.metal);
  }
  if (data.paper) {
    tableInsertRow(tableBody, 'Pepel', data.paper);
  }
  if (data.plastic) {
    tableInsertRow(tableBody, 'Plástico', data.plastic);
  }
}

function tableInsertRow(tableBody, material, sum) {
  var newRow = tableBody.insertRow();

  var cellMaterial = newRow.insertCell();
  cellMaterial.outerHTML = `<th scope="row">${material}</th>`;

  var sumMaterial = newRow.insertCell();
  sumMaterial.outerHTML = `<td>${sum}</td>`;
}

getData().then((data) => loadTable(data));
