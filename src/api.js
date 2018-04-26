import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  getProblemCount() {
    return axios('/problem_count', {
      method: 'get',
    })
  },
  getProblemList (offset, limit, searchParams) {
    console.log("get page:" + offset +"  " + limit);
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchParams !== undefined) {
      Object.keys(searchParams).forEach((element) => {
        if (searchParams[element]) {
          params[element] = searchParams[element]
        }
      })
    }
    return axios('problems/problem_list', {
      method: 'get',
      params: params
    })
  }
}
