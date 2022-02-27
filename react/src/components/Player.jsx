import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Player = ({ player, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Player;