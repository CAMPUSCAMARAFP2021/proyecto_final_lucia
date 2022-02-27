import Match from "./Match"
import MatchForm from './MatchForm';

import { useState, useEffect } from 'react';
import { getMatch,  createMatch,  deleteMatch} from "../api/match";

const MatchList = ({jwt}) => {
    const [Matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateMatch = (match) => {
        setIsLoading(true);
        createMatch(match)
            .then((newMatch) => {
                 setMatches((prevState) => [...prevState, newMatch]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteMatch= (match, jwt) => {
       setIsLoading(true);
       deleteMatch(match)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getMatch(jwt).then((matches) => {    
            setMatches(matches);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            Matches.map(match => 
                <Match 
                    key={match._id} 
                    match={match} 
                   onDelete={() => doDeleteMatch(match)}
                />)}
        <MatchForm createMatch={doCreateMatch}></MatchForm>
    </>
        
}
    

export default MatchList;