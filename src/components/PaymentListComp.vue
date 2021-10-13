<template>
  <div>
    <div class="listBlock">
      <v-row class="payment-block" v-for="item in renderData" :key="item.id">
        <v-col :cols="2" class="text text-list">{{ item.id }}</v-col>
        <v-col class="text text-list">{{ item.date }}</v-col>
        <v-col :cols="4" class="text text-list">{{ item.category }}</v-col>
        <v-col class="text text-list">{{ item.value }}</v-col>
        <i
          @click="$keks.toShowMenu(item.id)"
          class="fas fa-ellipsis-v text-list"
        ></i>
        <div class="comp" v-if="item.id == getId">
          <MyPlugin :id="windowId" />
        </div>
      </v-row>
    </div>

    <div class="paginationBlock">
      <i @click="prevPage" class="fas fa-chevron-left paginationEl"></i>
      <span
        v-for="n in pageCount"
        :key="n"
        @click="currentPage(n)"
        class="paginationEl"
        >{{ n }}</span
      >
      <i @click="nextPage" class="fas fa-chevron-right paginationEl"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyPlugin from "./MyPlugin.vue";

export default {
  name: "PaymentList",
  components: {
    MyPlugin,
  },

  data() {
    return {
      pages: [1],
      chosenPage: 1,
      size: 5,
      windowId: 0,
    };
  },
  methods: {
    openWindow(id) {
      if (this.windowId == id) {
        this.windowId = 0;
      } else {
        this.windowId = id;
      }
    },
    nextPage() {
      if (this.chosenPage !== this.pageCount.length) this.chosenPage++;
    },
    prevPage() {
      if (this.chosenPage > 1) this.chosenPage--;
    },
    currentPage(number) {
      this.chosenPage = number;
    },
    ...mapGetters("users", ["getUsers"]),
  },
  computed: {
    getId() {
      return this.windowId;
    },
    pageCount() {
      let pagesLength = this.getUsers().length;
      let pagesSize = this.size;
      let numberOfPages = Math.ceil(pagesLength / pagesSize);
      let pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    renderData() {
      let start = this.chosenPage * this.size - this.size;
      if (this.chosenPage == 1) {
        start = this.chosenPage - 1;
      }
      let end = start + this.size;
      return this.getUsers().slice(start, end);
    },
  },
  mounted() {
    this.$keks.EventBus.$on("toShowMenu", this.openWindow);
  },
};
</script>

<style scoped>
.text {
  width: 50px;
  font-size: 13px;
}
.row {
  margin: 0px;
}
.col {
  padding: 15px 0px;
}
/* .text:first-child {
   margin-right: -150px;
}  */

.payment-block {
  /* padding-left: 10px; */
  border-top: 1px solid rgba(0, 0, 0, 0.103);
  position: relative;
}

.comp {
  position: absolute;
  z-index: 1;
  left: 500px;
  top: 35px;
}

.paginationBlock {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.075);
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  width: 400px;
  margin-top: 40px;
  margin-left: 15%;
}

.paginationEl {
  padding-top: 2px;
  cursor: pointer;
  transition: 0.2s;
}

.paginationEl:hover {
  color: rgb(13, 146, 207);
}

.fa-ellipsis-v {
  padding-top: 15px;
  cursor: pointer;
  margin-left: -155px;
}
.tableDiv {
  display: flex;
}
</style>
