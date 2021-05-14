import React, { Component } from "react";
//import EmployeeService from '../services/EmployeeService'
import API from "../utils/API";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.searchEmployees = this.searchEmployees.bind(this);
  }

  searchEmployees = (query) => {
    API.searchEmployees(query)
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    API.getEmployees().then((res) => {
      console.log(res.data.results[0]);
      console.log(res.data.results[0].name.last);
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <input
            type="text"
            placeholder="Search.."
            onChange={this.searchEmployees}
          ></input>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> </th>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id.value}>
                  <td>
                    {" "}
                    <img src={employee.picture.medium} alt="Employee"></img>
                  </td>
                  <td> {employee.name.first} </td>
                  <td> {employee.name.last}</td>
                  <td> {employee.email}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
