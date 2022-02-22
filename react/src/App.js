import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from './components/TeamList';
import Container from 'react-bootstrap/Container';

function App() {
  return <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Welcome To Deports</h1>
      <TeamList/>
  </Container>
</Container> 
}

export default App;
