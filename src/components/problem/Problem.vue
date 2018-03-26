<template>
  <Layout>
    <Content class="panel">
      <h1 style="margin-top: 20px">问题：{{this.$route.params.id}}{{problem.title}}</h1>
      <Row style="margin: 20px 0">
        <i-col span="19">
          <Card dis-hover class="main-card">
            <h2>问题描述</h2>
            <Card dis-hover>
              {{problem.describe}}
            </Card>
            <h2>输入</h2>
            <Card dis-hover>
              {{problem.input}}
            </Card>
            <h2>输出</h2>
            <Card dis-hover>
              {{problem.output}}
            </Card>
            <Row style="margin-top: 20px">
              <i-col span="10" offset="1">
                <Card dis-hover>
                  <p slot="title">样例输入</p>
                  <p>{{problem.simple_input}}</p>
                </Card>
              </i-col>
              <i-col span="10" offset="2">
                <Card dis-hover>
                  <p slot="title">样例输出</p>
                  <p>{{problem.simple_output}}</p>
                </Card>
              </i-col>
            </Row>
            <h2>来源</h2>
            <Card dis-hover>
              {{problem.source}}
            </Card>
          </Card>
        </i-col>
        <i-col span="5">
          <Card class="sider-card">
            <p>ID:{{problem.id}}</p>
            <p>Time Limit:{{problem.time_limit}}</p>
            <p>Memory Limit:{{problem.memory_limit}}</p>
            <p>Created By:{{problem.author}}</p>
          </Card>
        </i-col>
        <i-col span="19">
          <Card dis-hover class="main-card">
            <Row style="margin-top: 15px">
              <i-col span="8" offset="1">
                Language:
                <Select v-model="info.language" style="width:200px">
                  <Option v-for="(item, index) in languages" :key="index" :value="item" ></Option>
                </Select>
              </i-col>
              <i-col span="8" offset="6">
                Theme:
                <Select v-model="select_theme" style="width:200px">
                  <Option v-for="(item, index) in themes" :key="index" :value="item" ></Option>
                </Select>
              </i-col>
            </Row>
            <Row style="margin: 15px auto;width: 90%;">
              <Input v-model="info.code" type="textarea" :rows="10" placeholder="Your code..."></Input>
              <i-col offset="21" style="margin-top: 15px"><Button type="ghost"><Icon type="ios-upload"></Icon>&nbsp;Submit</Button></i-col>
            </Row>
          </Card>
        </i-col>
      </Row>
    </Content>

  </Layout>
</template>

<script>
    import Layout from "iview/src/components/layout/layout";
    import Content from "iview/src/components/layout/content";
    import Card from "iview/src/components/card/card";
    import Row from "iview/src/components/grid/row";
    import ICol from "iview/src/components/grid/col";
    import Icon from "iview/src/components/icon/icon";

    export default {
      components: {
        Icon,
        ICol,
        Row,
        Card,
        Content,
        Layout
      },
      name: "problem",
      data() {
        return {
          problem: {
            id: '1000',
            title: 'default title',
            describe: 'default describe',
            input: 'default input',
            output: 'default output',
            simple_input: 'default simple input',
            simple_output: 'default simple output',
            source: 'default source',
            time_limit: '1000MS',
            memory_limit: '256MB',
            author: 'admin'
          },
          info: {
            user: '',
            language: '',
            code: ''
          },
          languages: [
            'C','C++','Java','Python'
          ],
          themes: [
            'theme1','theme2','theme3'
          ],
          select_theme: ''
        }
      }
    }
</script>

<style scoped>
  .panel {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .main-card {
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .main-card h2 {
    margin: 10px 0;
  }
  .sider-card {
    margin-left: 10px;
    margin-right: 20px;
  }
  .sider-card p {
    font-size: 1rem;
    border-bottom: 1px lightgrey dotted;
    width: 70%;
    margin: 10px auto;
  }
h1 {
  text-align: center;
}
</style>
