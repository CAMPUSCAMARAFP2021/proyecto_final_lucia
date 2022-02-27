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
            <input type="text" name="name" onChange={setName} value={field.name}></input>
            <input type="text" name="slogan" onChange={setDescription} value={field.slogan}></input>
            <input type="text" name="anthem" onChange={setPlace} value={field.anthem}></input>
            <input type="text" name="sports" onChange={setSports} value={field.sports}></input>
        </form>
        <Button name="enviar" onClick={() => createField(field)}></Button>
        <div>
            {JSON.stringify(field)}
        </div>
    </>;
}

export default FieldForm;