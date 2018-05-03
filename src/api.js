import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  getProblemNum() {
    return axios('problems/problem_num', {
      method: 'get',
    })
  },
  getContestNum() {
    return axios('/contests/contest_num', {
      method: 'get',
    })
  },
  getStatusNum() {
    return axios('/status/status_num', {
      method: 'get',
    })
  },
  getAcNum() {
    return axios('/rank/ac_num', {
      method: 'get',
    })
  },
  getAchievementNum() {
    return axios('/rank/achievement_num', {
      method: 'get',
    })
  },
  //获取题目列表
  getProblemList (offset, limit, searchParams) {
    console.log("get problem page:" + offset + "  " + limit);
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
  },
  //返回题目信息
  getProblem (problemID) {
    let params = {
      problemID: problemID
    };
    return axios('/problems/problem', {
      method: 'get',
      params: params
    })
  },
  //获取竞赛列表
  getContestList (offset, limit) {
    console.log("get contest page:" + offset + " " + limit);
    let params = {
      offset: offset,
      limit: limit
    };
    return axios('/contests/contest_list', {
      method: 'get',
      params: params
    })
  },
  //获取竞赛信息
  getContestInfo (contestID) {
    let params = {
      contestID: contestID
    };
    return axios('/contests/contest_info', {
      method: 'get',
      params: params
    })
  },
  //获取竞赛题目
  getContestProblem (contestID) {
    let params = {
      contestID: contestID
    };
    return axios('/contests/problem', {
      method: 'get',
      params: params
    })
  },
  //获取竞赛排名
  getContestRank (contestID) {
    let params = {
      contestID: contestID
    };
    return axios('/contests/problem', {
      method: 'get',
      params: params
    })
  },
  getContestRankProblem (contestID) {
    let params = {
      contestID: contestID
    };
    return axios('/contests/rank_problems', {
      method: 'get',
      params: params
    })
  },
  //获取状态列表
  getStatus (offset, limit) {
    console.log("get status page:" + offset + " " + limit);
    let params = {
      offset: offset,
      limit: limit
    };
    return axios('/status', {
      method: 'get',
      params: params
    })
  },
  //获取解题排名列表
  getAcRank (offset, limit) {
    console.log("get status page:" + offset + " " + limit);
    let params = {
      offset: offset,
      limit: limit
    };
    return axios('/rank/ac', {
      method: 'get',
      params: params
    })
  },
  //获取成绩排名列表
  getAchievementRank (offset, limit) {
    console.log("get status page:" + offset + " " + limit);
    let params = {
      offset: offset,
      limit: limit
    };
    return axios('/rank/achievement', {
      method: 'get',
      params: params
    })
  },
}
