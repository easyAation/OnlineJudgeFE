<template>
  <div>
    <problem-item :ProblemID="ProblemID"></problem-item>
    <submit-item></submit-item>
  </div>
</template>

<script>
  import ProblemItem from '../../problem/ProblemItem'
  import SubmitItem from '../../problem/SubmitItem'

  export default {
    name: "contest-problem",
    components: {
      ProblemItem,
      SubmitItem
    },
    data() {
      return {
        ProblemID: ''
      }
    },
    mounted() {
      this.ProblemID = this.$route.params.ProblemID
    }
  }
</script>

<style scoped>

</style>
