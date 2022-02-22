const getTeams = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/teams", {headers})
    .then(res => res.json())
}

const createTeams = async (team, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({team});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/teams", requestOptions)
        .then(response => response.json());
}

const deleteTeam = async (team, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/teams/" + team._id, requestOptions)
        .then(response => response.text());
}

export {
    getTeams,
    createTeams,
    deleteTeam
}