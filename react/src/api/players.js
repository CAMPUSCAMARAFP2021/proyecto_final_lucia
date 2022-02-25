const getPlayers = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/players", {headers})
    .then(res => res.json())
}


// const getMatchplayers = async (jwt) => {
//     const headers = new Headers();
//     headers.append("Authorization", jwt);
//     return fetch("http://localhost:3000/player", {headers})
//     .then(res => res.json())
// }

const createPlayers = async (player, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({player});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/players", requestOptions)
        .then(response => response.json());
}


const deletePlayer = async (metch, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/players/" + metch._id, requestOptions)
        .then(response => response.text());
}

export {
    getPlayers ,
    createPlayers ,
    deletePlayer,

}