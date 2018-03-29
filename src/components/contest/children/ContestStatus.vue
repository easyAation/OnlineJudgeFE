<template>
  <div>
    <Table :columns="head" :data="status_data"></Table>
    <Page :total="100" show-sizer show-total></Page>
  </div>
</template>

<script>
    export default {
        name: "cotent-status",
      data() {
        return {
          ContestID: '',
          head: [
            //空列，手动自适应补全大屏
            {
              title: '  '
            },
            {
              title: '运行编号',
              key: 'run_id',
              width: 85,
              sortType: 'desc',
              align: 'center'
            },
            {
              title: '用户名',
              key: 'user_name',
              width: 140,
              align: 'center'
            },
            {
              title: '题目编号',
              key: 'question_id',
              width: 85,
              align: 'center'
            },
            {
              title: '运行结果',
              key: 'result',
              width: 175,
              align: 'center',
              render: (h, params) => {
                const row = params.row;
                let status = 0;
                switch (row.result) {
                  case 'Pending':
                  case 'Judging':
                    status = 1;
                    break;
                  case 'Accepted':
                    status = 2;
                    break;
                  case 'Compile Error':
                  case 'Runtime Error':
                    status = 3;
                    break;
                }
                const color = status === 1 ? 'blue' : status === 2 ? 'green' : status === 3 ? 'yellow' : 'red';
                return h('Tag', {
                  props: {
                    type: 'border',
                    color: color
                  }
                }, row.result);
              }
            },
            {
              title: '内存',
              key: 'memory',
              width:90,
              align: 'center'
            },
            {
              title: '耗时',
              key: 'time',
              width: 70,
              align: 'center'
            },
            {
              title: '语言',
              key: 'language',
              width: 80,
              align: 'center'
            },
            {
              title: '代码长度',
              key: 'code_length',
              width: 85,
              align: 'center'
            },
            {
              title: '提交时间',
              key: 'submit_time',
              width: 100,
              align: 'center'
            },
            //空列，手动自适应补全大屏
            {
              title: '  '
            }
          ],
          status_data: [
            {
              run_id: '10000',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Accepted',
              memory: '1024KB',
              time: '1MS',
              language: 'Java',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10001',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Wrong Answer',
              memory: '1024KB',
              time: '1MS',
              language: 'Python',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10002',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Runtime Error',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10003',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Compile Error',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10004',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Presentation Error',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10005',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Time Limited Error',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10006',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Memory Limited Error',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10007',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Judging',
              memory: '1024KB',
              time: '1MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
            },
            {
              run_id: '10008',
              user_name: 'thisisalongname',
              question_id: '1001',
              result: 'Pending',
              memory: '1024KB',
              time: '10MS',
              language: 'C',
              code_length: '1000B',
              submit_time: '2018-03-27 08:23:35'
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
