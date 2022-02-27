import { useState } from "react";
import Button from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MatchForm = ({createMatch}) => {
    const [match, setMatch] = useState(
        {
            "duration": 0,
            "score": 0,
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
        <label>Introduce the duration of the match</label>
            <br></br>
            <input type="number" name="duration" onChange={setDuration} value={match.duration}></input>
            <br></br>
            <label>Introduce the score of the match</label>
            <br></br>
            <input type="number" name="score" onChange={setScore} value={match.score}></input>
            
        </form>
        <br></br>
        <Button name="enviar" onClick={() => createMatch(match)}></Button>
        <div>
            {JSON.stringify(match)}
        </div>
    </>;
}

export default MatchForm;