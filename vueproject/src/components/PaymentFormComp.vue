<template>
<div>
    <div v-show="$parent.$parent.toShow" class="formPayment">
        <input type="text" placeholder="Payment description" class="inputPayment" v-model="category">
        <input type="text" placeholder="Payment amount" class="inputPayment" v-model="value">
        <input type="text" placeholder="Payment date" class="inputPayment" v-model="date">
        <button class="buttonPayment" @click="addElement">Add</button>
    </div>
</div>
</template>

<script>
export default {
    name: "PaymentForm",
    data() {
        return {
            category: "",
            value: null,
            date: ""
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth()
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        addElement() {
            const data = {
                id: this.$parent.responseData.length+1,
                value: this.value,
                category: this.category,
                date: this.date || this.getCurrentDate,
            }
            this.$emit("addNewPayment", data)
        }
    }
}
</script>

<style scoped>
.formPayment {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-top: 40px;
    margin-left: 35%;
}

.inputPayment {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid rgb(216, 213, 213);
    border-radius: 5px;
    font-size: 14px;
}

.buttonPayment {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    background-color: rgb(73, 206, 73);
    border:none;
    border-radius: 5px;
    cursor: pointer;
}
.buttonPayment:hover{
    background-color: rgba(73, 206, 73, 0.616);
}
</style>
