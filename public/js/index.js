async function getData() {
  const res = await fetch('/api/v1/recycling_stations/report');
  const data = await res.json();

  return data;
}

// Load map with stores
function loadTable(data) {
  return data;
}

getData().then((data) => loadTable(data));
