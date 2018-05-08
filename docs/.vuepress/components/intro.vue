<template>
  <div>
      <h2>vue-text</h2>
      <h4>{{message}}</h4>
      <ul>
          <li v-for="n in 5">test</li>
      </ul>
  </div>
</template>

<script>
    export default{
        data(){
            return {
                message:'hello lm'
            }
        }
    }
</script>

<style scoped>
    h4{
        color: red;
    }
</style>

