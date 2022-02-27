import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import Container from 'react-bootstrap/Container';
import NavBar from './components/Navbar';

function App() {
  return <>
  <table></table>
  <NavBar></NavBar>
  <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Sports</h1>
    <h1>Create Players</h1>
    <PlayerList/>
    <h1>Create teams</h1>
      <TeamList/>
  </Container>
</Container> 
</>
}


export default App;