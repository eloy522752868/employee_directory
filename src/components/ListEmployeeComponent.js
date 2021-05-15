//Modified By: Eloy Gonzalez
//Modified Date: Eloy Gonzalez
//added the state props for employees and  setEmployeeList. We set componentDidMount run the api 
//and set employees with list and then when we do the search we update setEmployeeList search rest by user last name. d
import React, { Component } from "react";
//import EmployeeService from '../services/EmployeeService'
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      setEmployeeList: [],
    };
    this.searchEmployees = this.searchEmployees.bind(this);
  }

  searchEmployees = (query) => {
    const statereturn = this.state.employees;
    //console.log("csearch", statereturn);
    var req = [statereturn];
    //console.log(req[0].length);
    var Array = [];
    if (query === "") {
      this.setState({ setEmployeeList: statereturn });
    } else {
      for (var i = 0; i < req[0].length; i++) {
        if (req[0][i].name.last.includes(query.target.value)) {
          Array.push(req[0][i]);
        }
      }
      console.log(Array);
      this.setState({ setEmployeeList: [] });
      this.setState({ setEmployeeList: Array });
    }
  };

  componentDidMount() {
    API.getEmployees().then((res) => {
     //console.log(res.data.results[0]);
      // console.log(res.data.results[0].name.last);
      this.setState({ employees: res.data.results });
      this.setState({ setEmployeeList: res.data.results });
    });
  }

  render() {
    return (
      <div class="container">
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <div>
            <input type="text" class="form-control"  onChange={this.searchEmployees}  placeholder="search by last name" aria-label="search by first name"/>
          </div>
        </div>
        <br></br>
        <div className="row">
          <table className="table table table-hover table-light table-striped table-bordered">
          <thead class="thead-dark">
              <tr class = "primary">
                <th> </th>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Address Info</th>
              </tr>
            </thead>
            <tbody>
              {this.state.setEmployeeList.map((employee, index) => (
                <tr id={`Emplist-${index}`} key={index}>
                  <td>
                    <img src={employee.picture.large}  class="rounded mx-auto d-block" alt="..."></img>
                  </td>
                  <td > {employee.name.first} </td>
                  <td> {employee.name.last}</td>
                  <td> {employee.email}</td>
                  <td>
                    <ul>
                      <li><b>Address:</b> {employee.location.street.name}</li>
                      <li><b>City:</b> {employee.location.city}</li>
                      <li><b>State:</b> {employee.location.state}</li>
                      <li><b>Country:</b> {employee.location.country}</li>
                    </ul>
                  </td>
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
