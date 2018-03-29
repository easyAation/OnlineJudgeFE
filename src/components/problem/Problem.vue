<template>
  <Layout>
    <Content class="panel">
      <Row style="margin: 20px 0">
        <i-col span="19">
          <problem-item :ProblemID="ProblemID"></problem-item>
        </i-col>
        <i-col span="5">
          <Card class="sider-card">
           空闲中
            {{ProblemID}}
          </Card>
        </i-col>
        <i-col span="19">
          <submit-item :ProblemID="ProblemID"></submit-item>
        </i-col>
      </Row>
    </Content>

  </Layout>
</template>

<script>
  import ProblemItem from './ProblemItem';
  import SubmitItem from './SubmitItem';
    import Layout from "iview/src/components/layout/layout";
    import Content from "iview/src/components/layout/content";
    import Card from "iview/src/components/card/card";
    import Row from "iview/src/components/grid/row";
    import ICol from "iview/src/components/grid/col";


    export default {
      components: {
        ProblemItem,
        SubmitItem,
        ICol,
        Row,
        Card,
        Content,
        Layout
      },
      name: "problem",
      data() {
        return {
          ProblemID: ''
        }
      },
      mounted() {
        this.ProblemID = this.$route.params.ProblemID;
      }
    }
</script>

<style scoped>
  .panel {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .sider-card {
    margin-left: 10px;
    margin-right: 20px;
  }
  .sider-card p {
    font-size: 0.8rem;
    border-bottom: 1px lightgrey dotted;
    width: 70%;
    margin: 10px auto;
  }
</style>
