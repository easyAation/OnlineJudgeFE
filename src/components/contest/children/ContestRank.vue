<template>
  <div>
    <Table :columns="head" :data="data" ></Table>
  </div>
</template>

<script>
  import Table from "iview/src/components/table/table";

  export default {
    components: {Table},
    name: "contest-rank",
    data() {
      return {
        ContestID: '',
        head: [
          {
            title: '排名',
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '用户名',
            key: 'user_id',
            width: 120,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'user_name',
            width: 120,
            align: 'center'
          },
          {
            title: '解决',
            key: 'point',
            width: 60,
            align: 'center',
            sortType: 'desc'
          },
          {
            title: '用时',
            key: 'time',
            width: 100,
            align: 'center'
          }
        ],
        data: [
          {
            user_id: 'cary',
            user_name: '李木一',
            point: 4,
            time: '08:28:31',
            '1001': {
              is_ac: false,
              ac_time: '',
              error_number: 5
            },
            '1002': {
              is_ac: true,
              ac_time: '200s',
              error_number: 2
            },
            cellClassName: {
              '1001': 'table-info-cell-wa',
              '1002': 'table-info-cell-ac'
            }
          },
          {
            user_id: 'cary',
            user_name: '李木二',
            point: 5,
            time: '08:28:31',
            '1001': {
              ac: true,
              ac_time: '300s',
              error_number: 0
            },
            '1002': {
              is_ac: true,
              ac_time: '200s',
              error_number: 1
            },
            '1003': {
              is_ac: false,
              ac_time: '',
              error_number: 1
            },
            cellClassName: {
              '1001': 'table-info-cell-firstkill',
              '1002': 'table-info-cell-ac'
            }
          },
          {
            user_id: 'cary',
            user_name: '李木三',
            point: 4,
            time: '08:26:31',
            '1001': {
              is_ac: false,
              ac_time: '',
              error_number: 5
            },
            '1002': {
              is_ac: true,
              ac_time: '200s',
              error_number: 2
            },
            cellClassName: {
              '1001': 'table-info-cell-wa',
              '1002': 'table-info-cell-ac'
            }
          },
        ],
        //用题目id来进行操作，题目编号仅仅在显示时使用
        contest_rank_problems: [
          {
            no: 'A',
            id: '1001'
          },
          {
            no: 'B',
            id: '1002'
          },
          {
            no: 'C',
            id: '1003'
          }
        ]
      }
    },
    mounted() {
      this.ContestID = this.$route.params.ContestID;
      this.addTableColumns(this.contest_rank_problems)
    },
    methods: {
      addTableColumns (problems) {
        // 根据题目添加table column
        problems.forEach(problem => {
          this.head.push({
            align: 'center',
            key: problem.id,
            renderHeader: (h, params) => {
              return h('a', {
                'class': {
                  'emphasis': true
                },
                on: {
                  click: () => {
                    const path = '/contest/'+this.ContestID+'/problem/'+problem.id;
                    this.$router.push({
                      path: path,
                      params: {ProblemID: problem.id}
                    })
                  }
                }
              }, problem.no)
            },
            render: (h, params) => {
              if (params.row[problem.id]) {
                let status = params.row[problem.id];
                let acTime, errorNumber;
                if (status.is_ac) {
                  acTime = h('span', status.ac_time)
                }
                if (status.error_number !== 0) {
                  errorNumber = h('span', '(-' + status.error_number + ')')
                }
                return h('div',[acTime, errorNumber])
              }
            }
          })
        })
      }
    }
  }
</script>
<!--样式不能设为局部否则不生效-->
<style>
  .ivu-table .table-info-cell-firstkill {
    background-color: lightblue;
    color: #fff;
  }
  .ivu-table .table-info-cell-wa {
    background-color: red;
    color: #fff;
  }
  .ivu-table .table-info-cell-ac {
    background-color: green;
    color: #fff;
  }
</style>
