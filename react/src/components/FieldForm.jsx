import { useState } from "react";
import Button from './Button';


const FieldForm = ({ createField}) => {
    const [field, setField] = useState(
        {
            "name": "",
            "description": "",
            "place": "",
            "sports": "",
            
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setField(lastValue => ({ ...lastValue,  name }))
    }
    const setDescription = ({target}) => {
        const description = target.value;
        setField(lastValue => ({ ...lastValue, description }))
    }
    const setPlace = ({target}) => {
        const place = target.value;
        setField(lastValue => ({ ...lastValue,   place }))
    }
    const setSports = ({target}) => {
        const sports = target.value;
        setField(lastValue => ({ ...lastValue, sports }))
    }

    return <>
        <form>
        <label>Introduce the name of the field</label>
            <br></br>
            <input type="text" name="name" onChange={setName} value={field.name}></input>
            <br></br>
            <label>Introduce the description of the field</label>
            <br></br>
            <input type="text" name="descriptio" onChange={setDescription} value={field.slogan}></input>
            <br></br>
            <label>Introduce the place of the field</label>
            <br></br>
            <input type="text" name="place" onChange={setPlace} value={field.anthem}></input>
            <br></br>
            <label>Introduce the sports of the field</label>
            <br></br>
            <input type="text" name="sports" onChange={setSports} value={field.sports}></input>
            <br></br>
        </form>
        <Button name="enviar" onClick={() => createField(field)}></Button>
        <div>
            {JSON.stringify(field)}
        </div>
    </>;
}

export default FieldForm;