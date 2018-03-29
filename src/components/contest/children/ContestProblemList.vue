<template>
  <Table :columns="head" :data="problem_data"></Table>
</template>

<script>
    export default {
        name: "contest-problem-list",
      data() {
        return {
          ContestID: '',
          head: [
            {
              title: '编号',
              key: 'id',
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
                      const ProblemID = params.row.id;
                      const path = '/contest/'+this.ContestID+'/problem/'+params.row.id;
                      this.$router.push({
                        path: path
                        // name: 'ContestProblem',
                        // params: {ProblemID: ProblemID}
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
            }
          ],
          problem_data: [
            {
              id: '1001',
              title: 'HelloWorld',
              right: '200',
              submit: '400',
            },
            {
              id: '1002',
              title: '简单加法',
              right: '200',
              submit: '400'
            },
            {
              id: '1003',
              title: '水仙花数',
              right: '200',
              submit: '400'
            }
          ]
        }
      },
      mounted() {
        this.ContestID = this.$route.params.ContestID
      }
    }
</script>

<style scoped>

</style>
