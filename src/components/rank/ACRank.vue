<template>
  <list-panel>
    <div slot="panel-header">
      <h1>解题排名</h1>
    </div>
    <card slot="panel-body">
      <Table :columns="head" :data="ac_data"></Table>
    </card>
    <div slot="panel-page">
      <Page :total="100" show-sizer show-total></Page>
    </div>
  </list-panel>
</template>

<script>
  import ListPanel from '../ListPanel'
  import Card from "iview/src/components/card/card";
  import Table from "iview/src/components/table/table";

  export default {
    components: {
      Table,
      Card,
      ListPanel
    },
    name: "ac-rank",
    data() {
      return {
        head: [
          {title: ' '},
          {
            title: '排名',
            type: 'index',
            width: 60,
            align: 'center',
          },
          {
            title: '用户名',
            key: 'user_id',
            width: 150,
            align: 'center',
          },
          {
            title: '姓名',
            key: 'user_name',
            width: 150,
            align: 'center'
          },
          {
            title: '学校',
            key: 'school',
            width: 200,
            align: 'center',
          },
          {
            title: '专业班级',
            key: 'class',
            width: 200,
            align: 'center'
          },
          {
            title: '正确',
            key: 'right_num',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '提交',
            key: 'submit_num',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '正确率',
            key: 'ac_rate',
            width: 100,
            align: 'center',
            sortable: true
          },
          {title: ' '},
        ],
        ac_data: [
          {
            user_id: 'admin',
            user_name: 'admin',
            school: '内蒙古科技大学',
            class: '软件工程2018-2',
            right_num: 100,
            submit_num: 200,
            ac_rate: '50%'
          },
          {
            user_id: '1867111223',
            user_name: '李木一',
            school: '内蒙古科技大学',
            class: '计算机科学与技术2018-2',
            right_num: 80,
            submit_num: 100,
            ac_rate: '80%'
          },
          {
            user_id: 'admin',
            user_name: 'admin',
            school: '内蒙古科技大学',
            class: '软件工程2018-2',
            right_num: 200,
            submit_num: 400,
            ac_rate: '50%'
          },
          {
            user_id: '1867111223',
            user_name: '李木一',
            school: '内蒙古科技大学',
            class: '计算机科学与技术2018-2',
            right_num: 100,
            submit_num: 1000,
            ac_rate: '10%'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
