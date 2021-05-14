import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://randomuser.me/api/?results=20";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    searchEmployees(query){

        return axios.get(EMPLOYEE_API_BASE_URL + "&first=Kayla");
      }
     // + query 
 }

export default new EmployeeService()