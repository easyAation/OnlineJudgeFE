<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <p class="footer">&copy; 2006-2018 <a href="/client/about.jsp">ACM Camp of Inner Mongolia University of Science & Technology</a> All Rights Reserved.</p>
  </div>
</template>

<script>

  import NavBar from './components/NavBar'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>

<style>
.footer {
  padding-top: 20px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
