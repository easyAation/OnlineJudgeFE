<template>
  <Panel>
    <div slot="panel-header">
      <h1>竞赛列表</h1>
    </div>
    <Card slot="panel-body">
      <Table :columns="head" :data="content_data"></Table>
    </Card>
    <div slot="panel-page">
      <Page :total="100" show-sizer show-total></Page>
    </div>
  </Panel>

</template>

<script>

  import Panel from '../Panel'
  import Card from "iview/src/components/card/card";

  export default {
    name: "content-list",
    components: {
      Card,
      Panel
    },
    data() {
      return {
        head: [
          {
            title: '编号',
            key: 'id',
            width: 100,
            align: 'center',
            sortType: 'desc'
          },
          {
            title: '竞赛名称',
            key: 'title',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'text',
                  size: 'large'
                },
                on: {
                  click: () => {
                    this.$router.push({path: '/content/'+params.row.id})
                  }
                },
                style: {
                  padding: 0
                }
              }, params.row.title)
            }
          },
          {
            title: '状态',
            key: 'state',
            width:150,
            align: 'center',
            filters: [
              {
                label: '进行中',
                value: 1
              },
              {
                label: '已结束',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.state === '进行中';
              } else if (value === 2) {
                return row.state === '已结束';
              }
            }
          },
          {
            title: '截止时间',
            key: 'dead_time',
            width: 200,
            align: 'center'
          },
          {
            title: '类型',
            key: 'type',
            align: 'center',
            width: 150,
            filters: [
              {
                label: '公有',
                value: 1
              },
              {
                label: '私有',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.type === '公有';
              } else if (value === 2) {
                return row.type === '私有';
              }
            }
          }
        ],
        content_data: [
          {
            id: '1001',
            title: '测试竞赛',
            state: '进行中',
            dead_time: '2018-4-1',
            type: '公有'
          },
          {
            id: '1002',
            title: '测试竞赛名字很长名字很长很长很长很长应该不会长到这个程度了或者还能再长一点',
            state: '已结束',
            dead_time: '2018-1-1',
            type: '私有'
          },
          {
            id: '1003',
            title: '测试竞赛',
            state: '进行中',
            dead_time: '2018-4-1',
            type: '公有'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
