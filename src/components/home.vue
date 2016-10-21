<template>
  <div class="hello">
    <h1>home</h1>
    <a v-link="{name:'one',params:{id:0}}">aaa</a>
    <a v-link="{path:'/home/two'}">bbb</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
