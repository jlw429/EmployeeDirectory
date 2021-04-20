import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Navbar(props) {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className='text-center'>Employee Directory</h1>
        <p className='text-center'>
          Search or sort by name the employees of XYZ Corporation
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Navbar;
