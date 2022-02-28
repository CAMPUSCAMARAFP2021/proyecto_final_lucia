import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Match = ({  match, onDelete }) =>  {
const [condition,setCondition] = useState(false)
const openTeaminterface = () =>{
    setCondition(true) 
    }
 return <>

    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{match.duration}</Card.Title>
            <Card.Title>{match.score}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
            <Button variant="primary" onClick={openTeaminterface}>Seleccionar equipos</Button>
        </Card.Body>
    </Card>
   { {if (condition) {
       <Card>
        Aqui selecciono equipo
    </Card>
   }}} 
    </>
}

    
export default Match;