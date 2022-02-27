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
    <br></br>
        <form>
        <label>Introduce the name of the team</label>
            <br></br>
            <input type="text" name="name" onChange={setName} value={team.name}></input>
            <br></br>
            <label>Introduce the slogan of the team</label>
            <br></br>
            <input type="text" name="slogan" onChange={setSlogan} value={team.slogan}></input>
            <br></br>
            <label>Introduce the anthem of the team</label>
            <br></br>
            <input type="text" name="name" onChange={setAnthem} value={team.anthem}></input>
            <br></br>
        </form>
        <br></br>
        <Button name="enviar" onClick={() => createTeam(team)}></Button>
        <div>
            {JSON.stringify(team)}
        </div>
        <br></br>
    </>;
}

export default TeamForm;