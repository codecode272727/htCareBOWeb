<template>
  <div id="app">
      <div v-if="loading">
          <LoadingScreen></LoadingScreen>
      </div>

    <!--<div id="nav" v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import LoadingScreen from '@/components/Loader/LoadingScreen.vue'


    @Component({
        components: {
            LoadingScreen,

        }
    })

    export default class App extends Vue {

        loading: boolean = false
        login : boolean = true
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header{
  top: 0;
  position: fixed;
  width: 100%;
  color: #000;
  background-color: #fff;
  z-index: 10;
}

.loadScreen {
  height: 100%;
  display: flex;
  justify-content: center;
}
   
html, body {
   margin: 0;
   height: 100%;
   overflow: hidden
}
</style>
