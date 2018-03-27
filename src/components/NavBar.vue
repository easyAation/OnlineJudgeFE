<template>
  <layout class="layout-nav">
    <Menu mode="horizontal" theme="light"  @on-select="handleRoute">
      <div class="logo">IMUST ACM</div>
      <div>
        <MenuItem name="/">
          <Icon type="home"/>
          <span>主页</span>
        </MenuItem>
        <MenuItem name="/problem-list">
          <Icon type="navicon"/>
          <span>问题列表</span>
        </MenuItem>
        <MenuItem name="/content-list">
          <Icon type="trophy"/>
          <span>比赛列表</span>
        </MenuItem>
        <MenuItem name="/status">
          <Icon type="home"/>
          <span>评判状态</span>
        </MenuItem>
        <Submenu>
          <template slot="title">
            <Icon type="podium"/>
            <span>排名</span>
          </template>
          <MenuItem name="/ac-rank">
            <Icon type="ribbon-a"/>
            <span>解题排名</span>
          </MenuItem>
          <MenuItem name="/achievement-rank">
            <Icon type="ribbon-b"/>
            <span>成就排名</span>
          </MenuItem>
        </Submenu>
        <MenuItem name="faq">
          <Icon type="help-circled"/>
          <span>常见问题</span>
        </MenuItem>
      </div>
      <div class="login">
        <Button type="ghost" shape="circle">Login</Button>
      </div>
    </Menu>
  </layout>
</template>

<script>
  import Layout from "iview/src/components/layout/layout";
  import Row from "iview/src/components/grid/row";
  import ICol from "iview/src/components/grid/col";
  import Menu from "iview/src/components/menu/menu";
  import MenuItem from "iview/src/components/menu/menu-item";
  import Submenu from "iview/src/components/menu/submenu";
  import Icon from "iview/src/components/icon/icon";
  import Header from "iview/src/components/layout/header";
  import Button from "iview/src/components/button/button";

  export default {
    components: {
      Button,
      Header,
      Icon,
      Submenu,
      MenuItem,
      Menu,
      ICol,
      Row,
      Layout},
    name: "nav-bar",
    methods: {
      handleRoute(route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>
  .layout-nav {
    width: 100%;
    position: fixed;
    z-index: 100;
  }
  .logo {
    margin-left: 2%;
    margin-right: 2%;
    font-size: 1.5rem;
    float: left;
    line-height: 60px;
  }
  .login {
    margin-right: 5%;
    float: right;
    line-height: 60px;
  }
  .layout-nav span{
    font-size: 0.9rem;
  }
  .layout-nav i{
    font-size: 1rem;
  }
</style>
