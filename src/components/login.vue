<template>
  <div class="login">
    <p>用户名　<input type="text" v-model="username"/></p>
    <p>密　码　<input type="text" v-model="password"/></p>
    <button @click="login">登录</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      username:"",
      password:"",
      info:""
    }
  },
  methods:{
    login:function(){
      if(this.username=="wangdi"&&this.password=="123"){
        this.$router.go("./home")
      }
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
