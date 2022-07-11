<template>
<v-app>
    <v-app-bar class="flex-grow-0" color="primary">
        <v-btn color="white" elevation="4" large plain rounded>
            <router-link class="add-new-cost add-new-cost_color button__text" to="/form">ADD NEW COST +</router-link>
        </v-btn>
        <v-btn color="white" elevation="4" large plain rounded @click="addFood" class="add-new-cost button__text">ADD FOOD</v-btn>
        <v-btn color="white" elevation="4" large plain rounded @click="addTransport" class="add-new-cost button__text">ADD TRANSPORT</v-btn>
        <v-btn color="white" elevation="4" large plain rounded @click="addEnt" class="add-new-cost button__text">ADD ENTERTAINMENT</v-btn>
    </v-app-bar>
    <v-main>
      <div class="fff">
            <div class="container-list">
                <v-row class="header-menu">
                    <v-col :cols="2" class="text text-menu">#</v-col>
                    <v-col :cols="4" class="text text-menu">Date</v-col>
                    <v-col :cols="4" class="text text-menu">Category</v-col>
                    <v-col class="text text-menu">Value</v-col>
                </v-row>
                <List />
            </div>
            <Diagram />
            </div>
            <transition name="fade">
                <router-view />
            </transition>

            

    </v-main>
</v-app>
</template>

<script>
import Diagram from "./DiagramComp.vue";
import List from "./ListComp.vue";
export default {
  name: "Navigation",
  components: {
    List,
    Diagram,
  },
  methods: {
    addFood() {
      this.$router.push({
        name: "Form",
        query: {
          category: "Food",
          value: "200",
        },
      });
    },
    addTransport() {
      this.$router.push({
        name: "Form",
        query: {
          category: "Transport",
          value: "50",
        },
      });
    },
    addEnt() {
      this.$router.push({
        name: "Form",
        query: {
          category: "Entertainment",
          value: "2000",
        },
      });
    },
  },
};
</script>

<style scoped>
.fff {
  display: flex;
  justify-content: space-between;
  width: 1200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container-list {
  width: 640px;
  margin-left: 50px;
  margin-top: 30px;
}

/* .text:first-child{
    margin-right: -150px;
} */

.text-menu {
  margin-bottom: 10px;
}

.header-menu {
  font-weight: 700;
  /* padding-left: 10px; */
}

.header-menu .text {
  font-size: 15px;
}

.text {
  width: 87px;
  font-size: 13px;
}

.v-btn {
  background-color: rgb(51, 196, 51);
}

.add-new-cost {
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 20px;
  text-decoration: none;
  /* padding: 12px;

    color: white;
    background-color: rgb(73, 206, 73);
    border: none;
    border-radius: 5px;
    cursor: pointer;

    transition: 0.2s;
     */
}

.add-new-cost_color {
  color: white;
}

/* .add-new-cost:hover {
    background-color: rgba(73, 206, 73, 0.616);
} */
</style>
