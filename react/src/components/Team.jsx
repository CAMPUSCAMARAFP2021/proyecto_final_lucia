import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Team = ({team, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Img variant="top" src="${team.img}" />
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>{team.slogan}</Card.Text>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

export default Team;