import { useState } from "react";
import Button from './Button';
import { getPlayers } from "../api/players";


//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const PlayerForm = ({createPlayer}) => {
    const [player, setPlayer] = useState(
        {
            "name": "",
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setPlayer(lastValue => ({ ...lastValue, name }))
    }

    // const setNumber = ({ target }) => {
    //     const number = target.value;
    //     setPlayer(lastValue => ({ ...lastValue, number }))
    // }

    return <>
    <table></table>
        <form>
            <input type="text" name="name" onChange={setName} value={player.name}></input>
            {/* <input type="number" name="number" onChange={setNumber} value={player.number}></input> */}
        </form>
        <Button name="enviar" onClick={() => createPlayer(player)}></Button>
        <div>
            {JSON.stringify(player)}
        </div>
        
    </>;
}

export default PlayerForm;