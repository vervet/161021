<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <login pmsg="aaa"></login> 
    <button @click="sendchild">send</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import login from './login'

export default {
  components: {
    Hello,login
  },
  events:{
    "childev":function(msg){
      alert(msg)
    }
  },
  methods:{
    sendchild:function(){
      
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
