import { useState } from "react";
import Button from './Button';


//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const TeamForm = ({createTeam}) => {
    const [team, setTeam] = useState(
        {
            "name": "",
            "slogan": "",
            "player": "",
            "anthem": ""
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setTeam(lastValue => ({ ...lastValue, name }))
    }

    const setplayer = ({ target }) => {
        const player = target.value;
        setTeam(lastValue => ({ ...lastValue, player }))
    }
    const setAnthem = ({ target }) => {
        const anthem = target.value;
        setTeam(lastValue => ({ ...lastValue, anthem }))
    }
    const setSlogan = ({ target }) => {
        const slogan = target.value;
        setTeam(lastValue => ({ ...lastValue, slogan }))
    }

    return <>
    
        <form>
            <input type="text" name="name" onChange={setName} value={team.name}></input>
            <input type="text" name="player" onChange={setplayer} value={team.player}></input>
            <input type="text" name="himno" onChange={setAnthem} value={team.anthem}></input>
            <input type="text" name="himno" onChange={setSlogan} value={team.slogan}></input>
        </form>
        <Button name="enviar" onClick={() => createTeam(team)}></Button>
        <div>
            {JSON.stringify(team)}
        </div>
    </>;
}

export default TeamForm;