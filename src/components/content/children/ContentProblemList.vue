<template>
  <Table :columns="head" :data="problem_data"></Table>
</template>

<script>
    export default {
        name: "content-problem-list",
      data() {
        return {
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
                      this.$router.push({
                        name: 'ContentProblem',
                        params: {id: ProblemID}
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
      }
    }
</script>

<style scoped>

</style>
