<template>
  <div>
    <problem-item></problem-item>
    <submit-item></submit-item>
  </div>
</template>

<script>
  import ProblemItem from '../../problem/ProblemItem'
  import SubmitItem from '../../problem/SubmitItem'

  export default {
    name: "content-problem",
    components: {
      ProblemItem,
      SubmitItem
    }
  }
</script>

<style scoped>

</style>
