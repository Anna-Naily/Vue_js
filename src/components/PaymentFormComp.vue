<template>
<v-app>
    <div class="formPayment">
        <Category @setCategory="setCategory" />
        <input type="text" placeholder="Payment amount" class="inputPayment" v-model="value" />
        <input type="text" placeholder="Payment date" class="inputPayment" v-model="date" />
        <v-btn depressed
        color="primary" class="buttonPayment" @click="addElement">Add</v-btn>
        <v-btn depressed
        color="primary" class="buttonPayment" @click="closeForm">Close</v-btn>
    </div>
</v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Category from "./CategoryComp.vue";

export default {
  components: {
    Category,
  },
  name: "PaymentForm",
  data() {
    return {
      category: "",
      value: "",
      date: "",
    };
  },
  mounted() {
    if (this.$route.query.value) this.value = this.$route.query.value;
    else this.value = "";
    if (this.value !== "") this.date = this.getDate();
  },
  watch: {
    $route(to, from) {
      if (to !== from) this.value = this.$route.query.value;
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      let d = today.getDate();
      if (d < 10) d = "0" + d;
      let m = today.getMonth() + 1;
      if (m < 10) m = "0" + m;
      let y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },

  methods: {
    addElement() {
      const data = {
        id: this.getNextId(),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.setNewUser(data);
    },
    //метод, задающий след. id
    getNextId() {
      let nextId = 1;
      if (this.getUsers().length > 0) {
        return this.getUsers()[this.getUsers().length - 1].id + 1;
      } else return nextId;
    },
    closeForm() {
      this.$router.push({
        name: "Main",
      });
    },
    getDate() {
      const today = new Date();
      let d = today.getDate();
      if (d < 10) d = "0" + d;
      let m = today.getMonth() + 1;
      if (m < 10) m = "0" + m;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    setCategory(data) {
      this.category = data;
    },
    ...mapActions("users", ["setNewUser"]),
    ...mapGetters("users", ["getUsers"]),
  },
};
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
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

.buttonPayment:hover {
  background-color: rgba(73, 206, 73, 0.616);
}
</style>
