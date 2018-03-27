<template>
  <list-panel>
    <div slot="panel-header">
      <h1>解题排名</h1>
    </div>
    <card slot="panel-body">
      <Table :columns="head" :data="achievement_data"></Table>
    </card>
    <div slot="panel-page">
      <Page :total="100" show-sizer show-total></Page>
    </div>
  </list-panel>
</template>

<script>
  import ListPanel from '../ListPanel'
  import Poptip from "iview/src/components/poptip/poptip";
  import Avatar from "iview/src/components/avatar/avatar";

  export default {
    components: {
      Avatar,
      Poptip,
      ListPanel
    },
    name: "achievement-rank",
    data() {
      return {
        head: [
          {
            title: '排名',
            type: 'index',
            width: 100,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'user_name',
            width: 150,
            align: 'center'
          },
          {
            title: '成就数',
            key: 'achievement_num',
            width: 100,
            align: 'center',
            sortType: 'desc'
          },
          {
            title: '成就',
            key: 'achievement',
            render: (h, params) => {
              return h('ul', this.achievement_data[params.index].achievement.map(item => {
                return h('li', {
                  style: {
                    float: 'left',
                    listStyle: 'none',
                    paddingRight: '10px'
                  }
                }, [
                  h('Poptip', {
                    props: {
                      trigger: 'hover',
                      title: item.achievement_title,
                      content: item.achievement_content,
                      placement: 'bottom'
                    }
                  },[
                    h('Avatar', {
                      props: {
                        shape: 'square',
                        src: item.achievement_imgSrc,
                        size: 'large'
                      }
                    })
                  ])
                ])
              }));
            }
          }
        ],
        achievement_data: [
          {
            user_name: 'admin',
            achievement_num: 2,
            achievement: [
              {
                achievement_imgSrc: require('../../assets/achievement_img/default.jpg'),
                achievement_title: '测试标题',
                achievement_content: '成就介绍这是内容这是内容这是内容这是内容',
              },
              {
                achievement_imgSrc: require('../../assets/achievement_img/default.jpg'),
                achievement_title: '22测试标题',
                achievement_content: '22成就介绍这是内容这是内容这是内容这是内容',
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
