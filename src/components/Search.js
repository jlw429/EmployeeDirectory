import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search(props) {
  return (
    <Form>
      <Form.Group controlId='formBasicSearch'>
        <Form.Control type='search' placeholder='Search by Employee Name' />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Search;
