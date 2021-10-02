<template>
<div id="v-model-select-dynamic">
    <div class="blockCategory">
        <select class="selectCategory" v-model="category" id="category">
            <option v-for="option in renderCategories" :value="option" :key="option">
                {{ option }}
            </option>
        </select>
        <button class="addCategoryBtn" @click="toShow">
            <i class="fas fa-plus-square"></i>
        </button>
    </div>
    <div class="inputBlock" v-show="isVisible">
        <input type="text" placeholder="New category" class="input" v-model="category" />
        <button class="inputButton" @click="addCategory(category)">
            <i class="fas fa-check-square"></i>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {
            categories: ["Clothing", "Food", "Healthcare", "Housing", "Transport", "Entertainment"],
            category: "",
            isVisible: false,
        };
    },
    mounted() {
        this.category = this.$route.query.category;
    },


    methods: {
        addCategory(category) {
            if (!this.categories.includes(category)) {
                this.categories.push(category);
            }
            this.toShow();
        },
        toShow() {
            this.isVisible = !this.isVisible;
        },
    },
    computed: {
        renderCategories() {
            this.$emit("setCategory", this.category)
            return this.categories;
        },
    },
};
</script>

<style scoped>
.blockCategory {
    display: flex;

}

.selectCategory {

    padding: 10px 43px;
    border: 1px solid rgb(216, 213, 213);
    border-radius: 5px;
    font-size: 14px;
}

.addCategoryBtn {
    border: none;
    background: none;
    color: rgb(73, 206, 73);
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s
}

.addCategoryBtn:hover {
    color: rgba(73, 206, 73, 0.616);
}

.inputBlock {
    display: flex;

}

.input {
    margin-top: 5px;
    padding: 10px 9px;
    border: 1px solid rgb(216, 213, 213);
    border-radius: 5px;
    font-size: 14px;
}

.inputButton {
    border: none;
    background: none;
    color: rgb(73, 206, 73);
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s
}

.inputButton:hover {
    color: rgba(73, 206, 73, 0.616);
}
</style>
