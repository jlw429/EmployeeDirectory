import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import logo from '../logo.png';
import '../index.css'

function Navbar(props) {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <div id="image"><img src={logo} alt='happy_employees'></img></div>
        <h1 className='text-center'>Employee Directory</h1>
        <p className='text-center'>
          Search or sort by name the employees of XYZ Corporation
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Navbar;
