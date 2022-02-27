import { useState } from "react";
import Button from './Button';


const MatchForm = ({createMatch}) => {
    const [match, setMatch] = useState(
        {
            "duration": 0,
            "score": 0,
            "Date": "",
        }
    );

    const setDuration = ({ target }) => {
        const duration = target.value;
        setMatch(lastValue => ({ ...lastValue, duration }))
    }
    const setScore = ({ target }) => {
        const score = target.value;
        setMatch(lastValue => ({ ...lastValue, score }))
    }
    const setDate = ({ target }) => {
        const date = target.value;
        setMatch(lastValue => ({ ...lastValue,  date }))
    }


    return <>
        <form>
            <input type="number" name="duration" onChange={setDuration} value={match.duration}></input>
            <input type="number" name="score" onChange={setScore} value={match.score}></input>
            <input type="date" name="score" onChange={setDate} value={match.Date}></input>
        </form>
        <Button name="enviar" onClick={() => createMatch(match)}></Button>
        <div>
            {JSON.stringify(match)}
        </div>
    </>;
}

export default MatchForm;