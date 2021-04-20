//axios call
import axios from 'axios';

const API = {
  getEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=100&nat=us,ca');
  },
};
export default API; 