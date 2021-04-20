import { render } from '@testing-library/react';
import Table from 'react-bootstrap/Table';
import Fetch from '../util/fetch';
import React from 'react';

class RespTable extends React.Component {
  //Current state
  state = {
    sortOrder: '',
    results: [],
    search: '',
  };

  //GET Request via Axios
  componentDidMount() {
    Fetch.API()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  //Input Search
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default RespTable;
