import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3003';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  getProblemList (start, end, searchParams) {
    let params = {
      start: start,
      end: end
    };
    if (searchParams !== undefined) {
      Object.keys(searchParams).forEach((element) => {
        if (searchParams[element]) {
          params[element] = searchParams[element]
        }
      })
    }
    return axios('/problem_data', {
      method: 'get',
      params: params
    })
  }
}
