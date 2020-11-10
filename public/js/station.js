async function getUser() {
    const res = await fetch('/api/v1/users/me');
    const user = await res.json();
  
    return user;
}

function loadInput(user) {
    var input = document.createElement("input");

    input.setAttribute("type", "hidden");
    input.setAttribute("name", "id");
    input.setAttribute("value", user);
    
    document.getElementById("station-form").appendChild(input);
}

getUser().then((user) => loadInput(user));

