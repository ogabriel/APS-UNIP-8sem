const stationId = window['id'] || undefined;
const boxesIds = ["#plastic", "#metal", "#glass", "#paper", "#electronic"];

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

boxesIds.forEach((boxId) => {
    var button = document.querySelector(`${boxId} button`);
    button.onclick = () => {
        var input = document.querySelector(`${boxId} input[name='quantity']`);
        var value = parseInt(input.value);
        if (value && stationId) {
            switch (boxId) {
                case "#plastic":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_plastic'
                    })
                        .then((response) => {
                            console.log(response);
                            deposited = true;
                        })
                        .catch(console.error);
                    break;
                case "#metal":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_metal'
                    })
                        .then((response) => {
                            console.log(response);
                            deposited = true;
                        })
                        .catch(console.error);
                    break;
                case "#glass":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_glass'
                    })
                        .then((response) => {
                            console.log(response);
                            deposited = true;
                        })
                        .catch(console.error);
                    break;
                case "#paper":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_paper'
                    })
                        .then((response) => {
                            console.log(response);
                            deposited = true;
                        })
                        .catch(console.error);
                    break;
                case "#electronic":
                    putMaterialQuantity({
                        id: stationId,
                        bodyRequest: { g: value },
                        endpoint: 'add_electronic'
                    })
                        .then((response) => {
                            console.log(response);
                            deposited = true;
                        })
                        .catch(console.error);
                    break;
            }
        }
    };
});
