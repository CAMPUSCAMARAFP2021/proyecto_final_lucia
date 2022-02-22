import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Team = ({team, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>{team.player}</Card.Text>
            {/* <Button variant="primary" onClick={onDelete}>Eliminar</Button> */}
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Team;