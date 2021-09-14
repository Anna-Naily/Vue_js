<template>
  <div>
      <h1>Первое число:</h1>
      <input type="text" v-model.number="operand1">
      <h1>Второе число:</h1>
      <input type="text" v-model.number="operand2">
<h2>{{result}}</h2>
      <button id="1" v-on:click="calculation('+')">+</button>
      <button id="2" v-on:click="calculation('-')">-</button>
      <button id="3" v-on:click="calculation('/')">/</button>
      <button id="4" v-on:click="calculation('*')">*</button>
      <button id="5" v-on:click="calculation('degree')">степень</button>
      <button id="6" v-on:click="calculation('integerDivision')">целочисленное деление</button>
  </div>
</template>
<script>
export default {
    name: "Calculator",
    data: ()=>({
        operand1:0,
        operand2:0,
        result:0
    }),
    methods:{
        calculation(id){
            switch (id) {
                case "+":
                    this.result=this.operand1+this.operand2
                    break;
                case "-":
                    this.result=this.operand1-this.operand2
                    break;
                case "/":
                    this.result=this.operand1/this.operand2
                    break;
                case "*":
                    this.result=this.operand1*this.operand2
                    break;    
                case "degree":
                    this.result=this.operand1
                    for(let i=1; i<this.operand2; i++){
                        this.result*=this.operand1
                    }
                    break;     
                case "integerDivision":
                     this.result=this.operand1/this.operand2
                     this.result=Math.floor(this.result)
                    break;                    
            }
            console.log(this.result)
        }
    }
}
</script>
