import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import FieldList from './components/FieldList';
import { Container, Row, Col} from 'react-bootstrap'
import NavBar from './components/Navbar';




function App() {
  return <>
    <NavBar></NavBar>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Sports</h1>
        <hr></hr>
        <br></br>
        <Container>
  <Row>
    <Col> 
    <h1>Create Players</h1>
    <PlayerList/></Col>
    <Col><h1>Create teams</h1>
        <TeamList /></Col>
  </Row>
  <Row>
    <Col><h1>Create matchs</h1>
        <MatchList /></Col>
    <Col><h1>Create fields</h1>
        <FieldList /></Col>
  
  </Row>
</Container>
        
        <hr></hr>
        
        
        
        
      </Container>
    </Container>
  </>
}


export default App;