<template>
  <div id="app">
    <button class="addNewCost" @click="toSwitch">ADD NEW COST  +</button>
    <div class="containerList">
    <div class="header-menu">
      <p class="text">#</p>
      <p class="text">Date</p>
      <p class="text">Category</p>
      <p class="text">Value</p>
    </div>
    <List/>
    </div>
  </div>
</template>

<script>
import List from "./components/ListComp.vue"
export default {
  name: 'App',
  components: {
    List,
  },
  data(){
    return{
      toShow: false,
    }
  },
  methods:{
    toSwitch(){
      this.toShow=!this.toShow
    }
  }
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
.containerList{
  max-width: 650px;
  margin-left: 50px;
  margin-top: 30px;

}
.header-menu {
  display: flex;
  justify-content: space-between;
  font-weight: 700; 
  padding-left: 10px;
  
}
.header-menu .text{
font-size: 15px;
}
.text{
  width: 50px;
  font-size: 13px;
}
.addNewCost{
  padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    background-color: rgb(73, 206, 73);
    border:none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    transition: 0.2s
}
.addNewCost:hover{
   background-color: rgba(73, 206, 73, 0.616);
}

</style>
