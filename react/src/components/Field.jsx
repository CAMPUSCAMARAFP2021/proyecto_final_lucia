import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Field = ({ field, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{field.name}</Card.Title>
            <Card.Title>{field.description}</Card.Title>
            <Card.Title>{field.place}</Card.Title>
            <Card.Title>{field.sports}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Field;