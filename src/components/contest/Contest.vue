<template>
  <list-panel>
    <div slot="panel-header">
      <h1>竞赛：{{contest_info.id}}</h1>
    </div>
    <Layout slot="panel-body">
      <Row>
        <i-col span="19">
          <router-view/>
        </i-col>
        <i-col span="5">
          <Card class="sider-card">
            <p>竞赛:{{contest_info.id}}</p>
            <ul class="info">
              <li>开始时间：{{contest_info.start_time}}</li>
              <li>结束时间：{{contest_info.dead_time}}</li>
              <li>当前时间：</li>
              <li>状态：{{contest_info.status}}</li>
            </ul>
          </Card>
          <Card class="sider-card">
            <Menu @on-select="handleRoute" style="width: 100%">
              <menu-item name="ContestProblemList">
                <Icon type="document-text"></Icon>
                <span>问题列表</span>
              </menu-item>
              <menu-item name="ContestStatus">
                <Icon type="load-a"></Icon>
                <span>状态</span>
              </menu-item>
              <menu-item name="ContestRank">
                <Icon type="podium"></Icon>
                <span>排名</span>
              </menu-item>
            </Menu>
          </Card>
        </i-col>
      </Row>
    </Layout>
  </list-panel>
</template>

<script>
  import ListPanel from '../ListPanel'
  import Row from "iview/src/components/grid/row";
  import Layout from "iview/src/components/layout/layout";
  import ICol from "iview/src/components/grid/col";
  import Card from "iview/src/components/card/card";
  import Menu from "iview/src/components/menu/menu";
  import MenuItem from "iview/src/components/menu/menu-item";
  import Icon from "iview/src/components/icon/icon";

  export default {
    components: {
      Icon,
      MenuItem,
      Menu,
      Card,
      ListPanel,
      ICol,
      Layout,
      Row
    },
    name: "content",
    methods: {
      handleRoute(route) {
        // const path = '/contest/'+this.contest_info.id+route;
        this.$router.push({
          name: route,
          params: {ContestID: this.contest_info.id}
        })
      }
    },
    mounted() {
      this.contest_info.id = this.$route.params.ContestID
    },
    data() {
      return {
        contest_info: {
          id: '',
          start_time: '',
          dead_time: '',
          status: ''
        }
      }
    }
  }
</script>

<style scoped>
  .info {
    list-style: none;
  }
  .info li {
    padding: 5px 0;
    font-size: 0.8rem;
    border-bottom: 1px lightgrey dotted;
    width: 80%;
    margin-top: 10px;
  }
  .sider-card {
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
