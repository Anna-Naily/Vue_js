<template>
  <div id="app">
   
    <Navigation/>
    </div>

</template>

<script>
import Navigation from "./components/Navigation.vue"
export default {
  name: 'App',
  components: {
    Navigation,
  },
  data(){
    return{
      // toShow: false,
    }
  },
  // methods:{
  //   toSwitch(){
  //     this.toShow=!this.toShow
  //   },
    // clickHandlerFood(){
      
    // }
    // clickHandlerTransport()
    // clickHandlerEnt()
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
