import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://randomuser.me/api/?results=20";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    searchEmployees(query){
        console.log("return",query);
        return axios.get(EMPLOYEE_API_BASE_URL);
      }
 }

export default new EmployeeService()