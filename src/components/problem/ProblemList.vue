<template>
  <Panel>
    <div slot="panel-header">
      <h1>题目列表</h1>
      <div class="search-nav">
        <Input v-model="search.info">
        <Select v-model="search.select" slot="prepend" style="width: 80px">
          <Option value="id">id</Option>
          <Option value="keyword">keyword</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
        </Input>
      </div>
    </div>
    <Card slot="panel-body">
      <Table :columns="head" :data="problem_data"></Table>
    </Card>
    <div slot="panel-page">
      <Page :total="100" show-sizer show-total></Page>
    </div>
  </Panel>
</template>

<script>

  import Panel from '../Panel'
  import Input from "iview/src/components/input/input";

    export default {
      name: "problem-list",
      components: {
        Input,
        Panel
      },
      data() {
        return {
          search: {
            info: "",
            select: "id"
          },
          head: [
            {
              title: '编号',
              key: 'id',
              sortable: true,
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
                      this.$router.push({path: '/problem/'+params.row.id})
                    }
                  },
                  style: {
                    padding: '2px 0'
                  }
                }, params.row.title)
              }
            },
            {
              title: '来源',
              key: 'source'
            },
            {
              title: '正确数',
              key: 'right'
            },
            {
              title: '提交数',
              key: 'submit'
            },
            {
              title: '正确率',
              key: 'ac',
              sortable: true
            }
          ],
          problem_data: [
            {
              id: '1001',
              title: 'HelloWorld',
              source: 'imustacm',
              right: '200',
              submit: '400',
              ac: '50%'
            },
            {
              id: '1002',
              title: '简单加法',
              source: 'imustacm',
              right: '200',
              submit: '400',
              ac: '50%'
            },
            {
              id: '1003',
              title: '水仙花数',
              source: 'imustacm',
              right: '200',
              submit: '400',
              ac: '50%'
            }
        ]
        }
      }
    }
</script>

<style scoped>
  .search-nav {
    float: right;
  }
</style>
