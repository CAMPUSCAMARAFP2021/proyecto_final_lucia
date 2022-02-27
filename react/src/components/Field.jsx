import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Field = ({ field, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{field.name}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Field;