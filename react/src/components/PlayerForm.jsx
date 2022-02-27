import { useState } from "react";
import Button from './Button';
import Form from 'react-bootstrap/Form'


const PlayerForm = ({ createPlayer }) => {
    const [player, setPlayer] = useState(
        {
            "name": "",
            "number": 0,
        }
    );


    const setName = ({ target }) => {
        const name = target.value;
        setPlayer(lastValue => ({ ...lastValue, name }))
    }
    const setNumber = ({ target }) => {
        const number = target.value;
        setPlayer(lastValue => ({ ...lastValue, number }))
    }


    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={player.name}></input>
            <input type="number" name="number" onChange={setNumber} value={player.number}></input>
            <Form.Select size="lg">
                <option>{player.name}</option>
            </Form.Select>
        </form>
        <Button name="enviar" onClick={() => createPlayer(player)}></Button>
        <div>
            {JSON.stringify(player)}
        </div>
    </>;
}

export default PlayerForm;