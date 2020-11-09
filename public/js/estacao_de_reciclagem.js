const stationId = window['id'] || undefined;
const button = document.querySelector("button");

async function putMaterialQuantity(data) {
    const { id, bodyRequest, endpoint } = data;
    const response = await fetch(`/api/v1/recycling_stations/${id}/${endpoint}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(bodyRequest)
    });

    return response.json();
}

button.onclick = () => {
    document.querySelectorAll("input").forEach((input) => {
        var name = input.name
        value = parseInt(input.value);
        if (stationId && name != "" && value) {
            switch (name) {
                case "plasticQuantity":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_plastic'
                    }).then(console.log);
                    break;
                case "metalQuantity":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_metal'
                    }).then(console.log);
                    break;
                case "glassQuantity":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_glass'
                    }).then(console.log);
                    break;
                case "paperQuantity":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_paper'
                    }).then(console.log);
                    break;
                case "eletronicQuantity":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_eletronic'
                    }).then(console.log);
                    break;
            }
        }
    });
}
