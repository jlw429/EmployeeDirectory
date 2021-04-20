//axios call
import axios from 'axios';
const url = 'https://randomuser.me/api/?results=100&nat=us,ca';

export default {
  API: function () {
    return axios.get(url)
  }
}