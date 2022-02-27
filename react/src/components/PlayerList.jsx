import Player from "./Player"
import PlayerForm from './PlayerForm';

import { useState, useEffect } from 'react';
import { getPlayer,createPlayer, deletePlayer} from "../api/player";

const PlayerList = ({jwt}) => {
    const [Players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreatePlayer = (player) => {
        setIsLoading(true);
        createPlayer(player)
            .then((newPlayer) => {
                 setPlayers((prevState) => [...prevState, newPlayer]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeletePlayer= (player, jwt) => {
       setIsLoading(true);
       deletePlayer(player)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getPlayer(jwt).then((players) => {    
            setPlayers(players);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            Players.map(player => 
                <Player 
                    key={player._id} 
                    player={player} 
                   onDelete={() => doDeletePlayer(player)}
                />)}
        <PlayerForm createPlayer={doCreatePlayer}></PlayerForm>
    </>
        
}
    

export default PlayerList;