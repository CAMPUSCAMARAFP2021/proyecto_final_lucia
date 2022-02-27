import { useState } from "react";
import Button from './Button';


const TeamForm = ({createTeam}) => {
    const [team, setTeam] = useState(
        {
            "name": "",
            "slogan": "",
            "anthem": ""
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setTeam(lastValue => ({ ...lastValue,  name }))
    }
    const setSlogan = ({target}) => {
        const slogan = target.value;
        setTeam(lastValue => ({ ...lastValue, slogan }))
    }
    const setAnthem = ({target}) => {
        const anthem = target.value;
        setTeam(lastValue => ({ ...lastValue,  anthem }))
    }


    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={team.name}></input>
            <input type="text" name="slogan" onChange={setSlogan} value={team.slogan}></input>
            <input type="text" name="name" onChange={setAnthem} value={team.anthem}></input>
        </form>
        <Button name="enviar" onClick={() => createTeam(team)}></Button>
        <div>
            {JSON.stringify(team)}
        </div>
    </>;
}

export default TeamForm;