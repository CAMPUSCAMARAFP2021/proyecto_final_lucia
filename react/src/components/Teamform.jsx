import { useState } from "react";
import Button from './Button';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({createTeam}) => {
    const [team, setTeam] = useState(
        {
            "name": "",
            "player": ""
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

    // const setDescription = ({target}) => {
    //     const description = target.value;
    //     setTeam( lastValue => ({...lastValue, description}))
    // }

    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={team.name}></input>
            <p>{team.name}</p>
            <input type="text" name="player" onChange={setplayer} value={team.player}></input>
            <p>{team.player}</p>
            <p>{JSON.stringify(team)}</p>
            {/* <textarea onChange={setDescription} value={team.description}></textarea> */}
            {/* <DatePicker selected={task.dueDate} onChange={setDate} ></DatePicker> */}
        </form>
        <Button name="enviar" onClick={() => createTeam(team)}></Button>
        <div>
            {JSON.stringify(team)}
        </div>
    </>;
}

export default TaskForm;