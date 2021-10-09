<template>
<div id="app">
    <Calculator v-if="0"/>
    <Navigation />
</div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Calculator from "./components/Calculator.vue"
export default {
    name: 'App',
    components: {
        Navigation,
        Calculator
    },
    mounted() {
        this.$keks.EventBus.$on("hello", this.helloHandler)
    },
    methods: {
        helloHandler() {
            console.log(this.helloHandler)
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
</style>
