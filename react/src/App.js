import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from './components/TeamList';
import Container from 'react-bootstrap/Container';
import NavBar from "./components/Navbar";

function App() {
  return <>
  <NavBar></NavBar> 
  <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Welcome To sports</h1>
      <TeamList/>
  </Container>
</Container> 
</>
}

export default App;
