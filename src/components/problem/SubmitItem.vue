<template>
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
</template>

<script>
  import Card from "iview/src/components/card/card";
  import Row from "iview/src/components/grid/row";
  import ICol from "iview/src/components/grid/col";

    export default {
        name: "submit-item",
      props: ['ProblemID'],
      components: {
        Card,
        Row,
        ICol,
      },
      data() {
          return {
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
  .main-card {
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
</style>
