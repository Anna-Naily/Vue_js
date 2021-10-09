<template>
<div>
    <h1>Первое число:</h1>
    <input name="operand1" type="text" v-model.number="operand1">
    <h1>Второе число:</h1>
    <input name="operand2" type="text" v-model.number="operand2">
    <h2 class="error" v-if="error">ERROR</h2>
    <h2 v-else>{{ result }}</h2>
    <button :name="item" v-for="item in operators" :key="item" @click="calculation(item)">{{ item.toUpperCase() }}</button><br>

    <input class="checkboxButton" type="checkbox" id="checkbox" @change="setVisible">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br>
    <div class="keyboard" v-show="keyboardVisible">
        <div class="buttons"> <button :name="item" v-for="item in keyboard" :key="item" @click="numberInput(item)">{{ item }}</button></div>
        <div class="radio">
            <input class="radioButtons" type="radio" id="operand1" value="1" v-model="operandFlag">
            <label for="operand1">Первое значение</label>
            <input class="radioButtons" type="radio" id="operand2" value="2" v-model="operandFlag">
            <label for="operand2">Второе значение</label></div>
    </div>
</div>
</template>

<script>
export default {
    name: "Calculator",
    data: () => ({
        operand1: "",
        operand2: "",
        result: "",
        operators: ["+", "-", "/", "*", "степень", "целочисленное деление"],
        keyboard: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "delete"],
        error: false,
        keyboardVisible: false,
        operandFlag: "1"
    }),
    methods: {
        calculation(name) {
            this.error = false;
            if (this.operand1 == "" || this.operand2 == "") this.error = true
            switch (name) {
                case "+":
                    this.result = Number(this.operand1) + Number(this.operand2)
                    break;
                case "-":
                    this.result = this.operand1 - this.operand2
                    break;
                case "/":
                    if (this.operand2 !== 0) {
                        this.result = this.operand1 / this.operand2;
                    } else {
                        this.error = true
                    }
                    break;
                case "*":
                    this.result = this.operand1 * this.operand2
                    break;
                case "степень":
                    this.result = this.operand1
                    for (let i = 1; i < this.operand2; i++) {
                        this.result *= this.operand1
                    }
                    break;
                case "целочисленное деление":
                    this.result = this.operand1 / this.operand2
                    this.result = Math.floor(this.result)
                    break;
            }
        },
        setVisible() {
            this.keyboardVisible = !this.keyboardVisible
        },
        numberInput(item) {
            let text = ""
            switch (this.operandFlag) {
                case "1":
                    text = `` + this.operand1;
                    if (item == "delete") {
                        this.operand1 = text.slice(0, -1)
                    } else {
                        this.operand1 += item
                    }
                    break;
                case "2":
                    text = `` + this.operand2;
                    if (item == "delete") {
                        this.operand2 = text.slice(0, -1)
                    } else {
                        this.operand2 += item
                    }
                    break;
            }
        },
    },
}
</script>

<style scoped>
.error {
    color: red
}

.keyboard {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
}

.radio {
    margin-top: 10px
}

.checkboxButton {
    margin-top: 15px
}
</style>
