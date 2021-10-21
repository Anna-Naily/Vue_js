<template>
<v-app>
    <div class="form-payment">
        <Category @setCategory="setCategory" />
        <input type="text" placeholder="Payment amount" class="form-payment__input" v-model="value" />
        <input type="text" placeholder="Payment date" class="form-payment__input" v-model="date" />
        <v-btn depressed
        color="primary" class="form-payment__btn" @click="addElement">Add</v-btn>
        <v-btn depressed
        color="primary" class="form-payment__btn" @click="closeForm">Close</v-btn>
    </div>
</v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
    ...mapState("users", ["users"]),
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
      if (this.users.length > 0) {
        return this.users[this.users.length - 1].id + 1;
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
  },
};
</script>

<style scoped>
.form-payment {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 40px;
  margin-left: 35%;
}

.form-payment__input {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 5px;
  font-size: 14px;
}

.form-payment__btn {
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

.form-payment__btn:hover {
  background-color: rgba(73, 206, 73, 0.616);
}
</style>
