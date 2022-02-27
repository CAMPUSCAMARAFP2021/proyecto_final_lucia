import { useState } from "react";
import Button from './Button';


const PlayerForm = ({createPlayer}) => {
    const [player, setPlayer] = useState(
        {
            "name": ""
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setPlayer(lastValue => ({ ...lastValue, name }))
    }


    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={player.name}></input>
        </form>
        <Button name="enviar" onClick={() => createPlayer(player)}></Button>
        <div>
            {JSON.stringify(player)}
        </div>
    </>;
}

export default PlayerForm;