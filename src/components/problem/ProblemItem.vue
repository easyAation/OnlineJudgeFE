<template>
  <Card dis-hover class="describe-card">
    <h1 style="margin-top: 20px">问题：{{this.$route.params.id}}{{problem.title}}</h1>
    <div class="limit-info">
      <span>Time Limit:{{problem.time_limit}}</span>
      <span>Memory Limit:{{problem.memory_limit}}</span>
    </div>
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
    <div v-if="problem.hint !== ''">
      <h2>提示</h2>
      <Card dis-hover>
        {{problem.hint}}
      </Card>
    </div>
  </Card>
</template>

<script>
  import Card from "iview/src/components/card/card";
  import Row from "iview/src/components/grid/row";
  import ICol from "iview/src/components/grid/col";
    export default {
      components: {
        Card,
        Row,
        ICol
      },
      name: "problem-item",
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
            hint: 'default hint',
            source: 'default source',
            time_limit: '1000MS',
            memory_limit: '256MB',
            author: 'admin'
          }
        }
      }
    }
</script>

<style scoped>
  .describe-card {
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .describe-card h1 {
    text-align: center;
  }
  .describe-card h2 {
    margin: 10px 0;
  }
  .limit-info {
    text-align: center;
    margin: 10px auto;
  }
  .limit-info span {
    font-size: 1rem;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
