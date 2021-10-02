<template>
  <div>
    <PaymentList :list="responseData" />

    
  </div>
</template>

<script>
import PaymentList from "../components/PaymentListComp";
//import PaymentForm from "../components/PaymentFormComp";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "List",
  components: {
    PaymentList
   // PaymentForm,
  },
  data() {
    return {
      responseData: [],
      renderPages: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapMutations("users", ["setUsers"]),
    ...mapActions("users", ["getUsers"]),

    addNewPayment(data) {
      this.responseData = [...this.responseData, data];
    },
  },
};
</script>

<style scoped></style>
