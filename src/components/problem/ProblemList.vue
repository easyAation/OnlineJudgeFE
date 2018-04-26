<template>
  <ListPanel>
    <div slot="panel-header">
      <h1>题目列表</h1>
      <!--<div class="search-nav">-->
      <!--<Input v-model="search.info">-->
      <!--<Select v-model="search.select" slot="prepend" style="width: 80px">-->
      <!--<Option value="id">id</Option>-->
      <!--<Option value="keyword">keyword</Option>-->
      <!--</Select>-->
      <!--<Button slot="append" icon="ios-search"></Button>-->
      <!--</Input>-->
      <!--</div>-->
    </div>
    <Card slot="panel-body">
      <Table :columns="head" :data="problem_data"></Table>
    </Card>
    <div slot="panel-page">
      <Page :total="dataCount" :page-size="pageSize" @on-change="changePage" show-sizer show-total></Page>
    </div>
  </ListPanel>
</template>

<script>

  import ListPanel from '../ListPanel'
  import Input from "iview/src/components/input/input";

  import api from '../../api'

  export default {
    name: "problem-list",
    components: {
      Input,
      ListPanel
    },
    data() {
      return {
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 20,
        search: {
          info: "",
          select: "id"
        },
        head: [
          {
            title: '编号',
            key: 'id',
            sortable: true,
            width: 100,
            align: 'center'
          },
          {
            title: '题目',
            key: 'title',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'text',
                  size: 'large'
                },
                on: {
                  click: () => {
                    this.$router.push({
                      name: 'Problem',
                      params: {ProblemID: params.row.id}
                    })
                  }
                },
                style: {
                  padding: 0
                }
              }, params.row.title)
            }
          },
          {
            title: '来源',
            key: 'source',
            width: 220,
            align: 'center'
          },
          {
            title: '正确数',
            key: 'accepted_number',
            width: 150,
            align: 'center'
          },
          {
            title: '提交数',
            key: 'submit_number',
            width: 150,
            align: 'center'
          },
          {
            title: '正确率',
            key: 'ac_rate',
            sortable: true,
            width: 150,
            align: 'center'
          }
        ],
        problem_data: []
      }
    },
    methods: {
      getProblems(offset, limit) {
        api.getProblemList(offset, limit).then(res => {
          this.problem_data = res.data.data;
        },res => {
        }).catch(err => {
          console.log("error:" + err)
        })
      },
      changePage(index) {
        let offset = ( index - 1 ) * this.pageSize;
        let limit = index * this.pageSize;
        this.getProblems(offset, limit)
      }
    },
    created() {
      // api.getProblemCount().then(res => {
      //   this.dataCount = res.data
      // }).catch(err => {
      //   console.log("can not get dataCount:" + err)
      // });
      this.dataCount = 100;
      this.getProblems(0, 20);
    }
  }
</script>

<style scoped>
  .search-nav {
    float: right;
  }
</style>
