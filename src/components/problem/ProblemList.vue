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
      <Page :total="dataCount" :page-size="pageSize" show-sizer show-total></Page>
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
        pageSize: 10,
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
            key: 'right',
            width: 150,
            align: 'center'
          },
          {
            title: '提交数',
            key: 'submit',
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
    created() {
      api.getProblemList(0, 3).then(res => {
        this.problem_data = res.data
      }).catch(err => {
        console.log("error:" + err)
      })
    }
  }
</script>

<style scoped>
  .search-nav {
    float: right;
  }
</style>
