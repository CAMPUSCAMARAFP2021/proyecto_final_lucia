import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Match = ({  match, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{match.duration}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Match;