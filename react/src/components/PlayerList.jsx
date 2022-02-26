import Player from "./Player"
import PlayerForm from './Playerform';

import { useState, useEffect } from 'react';
import { getPlayers, createPlayers, deletePlayer} from "../api/players";

const PlayerList = ({jwt}) => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreatePlayer = (team) => {
        setIsLoading(true);
        createPlayers(team)
            .then((newTeam) => {
                 setPlayers((prevState) => [...prevState, newTeam]);
                 setIsLoading(false);       
            }); 
    };
   
    const doDeletePlayer = (team, jwt) => {
        setIsLoading(true);
        deletePlayer(team)
        .then(loadData);
        setIsLoading(false)
    };
    
    const loadData = () => {
        setIsLoading(true);
        getPlayers(jwt).then((teams) => {    
            setPlayers(teams);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            players.map(player => 
                <Player 
                    key={player._id} 
                    team={player} 
                    onDelete={() => doDeletePlayer(player)}
                />)}
        <PlayerForm createPlayer={doCreatePlayer}></PlayerForm>
       
    </>
        
}
    

export default PlayerList;