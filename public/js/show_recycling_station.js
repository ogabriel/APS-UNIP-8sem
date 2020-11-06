const id = window['id'] || 1; // modificar depois
const div = document.getElementById("station");

async function getStationInfo(id) {
    const rstationRequest = await fetch(`/api/v1/recycling_stations/${id}`);
    const rawStationResponse = await rstationRequest.json();
    const stationResponse = JSON.stringify(rawStationResponse).replace("name", "rsname").split(",").filter(str => str.indexOf("name") != -1 || str.indexOf("kg") != -1).join(",");

    const userRequest = await fetch(`/api/v1/users/${id}`);
    const rawUserResponse = await userRequest.json();
    const userResponse = JSON.stringify(rawUserResponse).replace("name", "owner").split(",").filter(str => str.indexOf("email") != -1 || str.indexOf("owner") != -1).join(",");

    
    filteredUserResponse = JSON.parse(`{${userResponse}}`);
    filteredStationResponse = JSON.parse(`{${stationResponse}}`);

    const response = {...filteredUserResponse, ...filteredStationResponse};
    console.log(response);
    return response;
}

getStationInfo(id)
.then((station) => {
    const table = document.createElement("table");
    var tr, td, text;

    Object.keys(station).forEach((key) => {
        tr = document.createElement("tr");
            
        td = document.createElement("td");
        text = document.createTextNode(key);
        td.appendChild(text);
        tr.appendChild(td);

        td = document.createElement("td");
        text = document.createTextNode(station[key]);
        td.appendChild(text);
        tr.appendChild(td);

        table.appendChild(tr);
    });

    div.appendChild(table);
})
.catch((err) => {
    console.error(err);
    //window.location.replace("./map.html");
});
