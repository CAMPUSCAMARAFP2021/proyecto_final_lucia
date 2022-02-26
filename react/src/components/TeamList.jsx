import Team from "./Team"
import TeamForm from './Teamform';

import { useState, useEffect } from 'react';
import {getTeams, createTeams, deleteTeam} from "../api/teams";




const TeamList = ({jwt}) => {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateTeam = (team) => {
        setIsLoading(true);
        createTeams(team)
            .then((newTeam) => {
                 setTeams((prevState) => [...prevState, newTeam]);
                 setIsLoading(false);       
            }); 
    };
   
    const doDeleteTeam = (team, jwt) => {
        setIsLoading(true);
        deleteTeam(team)
        .then(loadData);
        setIsLoading(false)
    };
    
    const loadData = () => {
        setIsLoading(true);
        getTeams(jwt).then((teams) => {    
            setTeams(teams);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            teams.map(team => 
                <Team 
                    key={team._id} 
                    team={team} 
                    onDelete={() => doDeleteTeam(team)}
                />)}
        <TeamForm createTeam={doCreateTeam}></TeamForm>
       
    </>
        
}
    

export default TeamList;