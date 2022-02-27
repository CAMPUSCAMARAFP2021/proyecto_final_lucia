const getMatch = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/matches", {headers})
    .then(res => res.json())
}

const createMatch = async (match, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({ match});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/matches", requestOptions)
        .then(response => response.json());
}

const deleteMatch = async (match, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/matches/" + match._id, requestOptions)
        .then(response => response.text());
}

export {
    getMatch,
    createMatch,
    deleteMatch 
}