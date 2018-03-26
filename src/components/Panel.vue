<template>
  <layout>
    <Content class="panel">
      <row>
        <i-col :lg="{ span: 22, offset: 1 }" :xs="{ span: 22, offset: 1 }" class="header">
          <slot name="panel-header"></slot>
        </i-col>
        <i-col span="8" offset="15" class="container">
          <slot name="panel-nav"></slot>
        </i-col>
        <i-col span="22" offset="1" class="container">
          <slot name="panel-body"></slot>
        </i-col>
        <i-col span="12" offset="12" class="page">
          <slot name="panel-page"></slot>
        </i-col>
      </row>
    </Content>
  </layout>
</template>

<script>
    import Layout from "iview/src/components/layout/layout";
    import Row from "iview/src/components/grid/row";
    import ICol from "iview/src/components/grid/col";
    import Content from "iview/src/components/layout/content";

    export default {
      components: {
        Content,
        ICol,
        Row,
        Layout},
      name: "panel"
    }
</script>

<style scoped>
  .panel {
    margin-top: 60px;
    padding-bottom: 20px;
  }
  .header {
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container {
    /*margin-top: 20px;*/
  }
  .page {
    margin-top: 20px;
  }
</style>
