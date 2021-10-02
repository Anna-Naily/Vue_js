<template>
<div>
    <router-link class="addNewCost" to="/form">ADD NEW COST +</router-link>
    <button @click="addFood" class="addNewCost">ADD FOOD</button>
    <button @click="addTransport" class="addNewCost">ADD TRANSPORT</button>
    <button @click="addEnt" class="addNewCost">ADD ENTERTAINMENT</button>
    <div class="containerList">
        <div class="header-menu">
            <p class="text">#</p>
            <p class="text">Date</p>
            <p class="text">Category</p>
            <p class="text">Value</p>
        </div>
        <List />
    </div>
    <router-view />
</div>
</template>

<script>
import List from "./ListComp.vue"
export default {
    name: "Navigation",
    components: {
        List
    },
    methods: {
        addFood() {
            this.$router.push({
                name: 'Form',
                query: {
                    category: "Food",
                    value: "200"
                }
            });
        },
        addTransport() {
            this.$router.push({
                name: 'Form',
                query: {
                    category: "Transport",
                    value: "50"
                }
            });
        },
        addEnt() {
            this.$router.push({
                name: 'Form',
                query: {
                    category: "Entertainment",
                    value: "2000"
                }
            });
        },
    }
}
</script>

<style scoped>
.containerList {
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

.header-menu .text {
    font-size: 15px;
}

.text {
    width: 50px;
    font-size: 13px;
}

.addNewCost {
    padding: 12px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    background-color: rgb(73, 206, 73);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    transition: 0.2s;
    text-decoration: none;
}

.addNewCost:hover {
    background-color: rgba(73, 206, 73, 0.616);
}
</style>
