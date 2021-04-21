import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Fetch from '../util/fetch';

//FA
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSort);

class RespTable extends Component {
  //Current state
  state = {
    results: [],
    search: '',
  };

  //GET Request via Axios

  componentDidMount() {
    Fetch.API()
      .then((res) => {
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  //Input Search
  handleInputChange = (event) => {
    if (event.target.name === 'search') {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm,
      });
    }
  };

  //Sort by first name
  sortByFName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === 'DESC') {
      sortedEmployees.reverse();
      this.setState({ sortOrder: 'ASC' });
    } else {
      this.setState({ sortOrder: 'DESC' });
    }
    this.setState({ results: sortedEmployees });
  };

  //Sort by last name
  sortByLName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    if (this.state.sortOrder === 'DESC') {
      sortedEmployees.reverse();
      this.setState({ sortOrder: 'ASC' });
    } else {
      this.setState({ sortOrder: 'DESC' });
    }
    this.setState({ results: sortedEmployees });
  };

  render() {
    return (
      <div class='align-items-center'>
        <Form>
          <Form.Group id='formBasicSearch'>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.search}
              name='search'
              type='text'
              placeholder='Search by First Name or Last Name'
              id='search'
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Picture</th>
              <th>
                First Name
                <span onClick={this.sortByFName}>
                  <FontAwesomeIcon icon='sort' />
                </span>
              </th>
              <th>
                Last Name
                <span onClick={this.sortByLName}>
                  <FontAwesomeIcon icon='sort' />
                </span>
              </th>
              <th>User Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          {/* First Name Sort */}
          {this.state.results &&
            this.state.results.map((item) =>
              item.name.first.toLowerCase().includes(this.state.search) ? (
                <tbody key={item.login.uuid}>
                  <tr>
                    <td>
                      <img src={item.picture.thumbnail} alt='thumbnail' />
                    </td>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.login.username}</td>
                    <td>{item.cell}</td>
                    <td>{item.email}</td>
                    <td>{item.location.city}</td>
                    <td>{item.location.state}</td>
                    <td>{item.location.country}</td>
                  </tr>
                </tbody>
              ) : // Last Name Sort
              item.name.last.toLowerCase().includes(this.state.search) ? (
                <tbody key={item.login.uuid}>
                  <tr>
                    <td>
                      <img src={item.picture.thumbnail} alt='thumbnail' />
                    </td>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.login.username}</td>
                    <td>{item.cell}</td>
                    <td>{item.email}</td>
                    <td>{item.location.city}</td>
                    <td>{item.location.state}</td>
                    <td>{item.location.country}</td>
                  </tr>
                </tbody>
              ) : null
            )}
        </Table>
      </div>
    );
  }
}

export default RespTable;
