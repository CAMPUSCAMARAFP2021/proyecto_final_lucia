const getPlayer = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/player", {headers})
    .then(res => res.json())
}

const createPlayer = async (player, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({player});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/player", requestOptions)
        .then(response => response.json());
}

const deletePlayer = async (player, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/player/" + player._id, requestOptions)
        .then(response => response.text());
}

export {
    getPlayer,
    createPlayer,
    deletePlayer

}