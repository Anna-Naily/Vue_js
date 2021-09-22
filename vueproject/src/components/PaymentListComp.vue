<template>
<div>
<div class="listBlock">
    <div class="payment-block" v-for="item in renderData" :key="item.value">
        <p class="text">{{ item.id }}</p>
        <p class="text">{{ item.date }}</p>
        <p class="text">{{ item.category }}</p>
        <p class="text">{{ item.value }}</p>
    </div>
</div>
    <div class="paginationBlock">
        <i @click="prevPage" class="fas fa-chevron-left paginationEl"></i>
        <span v-for="n in pageCount" :key="n" @click="currentPage(n)" class="paginationEl">{{ n }}</span>
        <i @click="nextPage" class="fas fa-chevron-right paginationEl"></i>
    </div>
</div>
</template>

<script>
export default {
    name: "PaymentList",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            pages: [1],
            chosenPage: 1,
            size: 5

        }
    },
    methods: {
        nextPage() {
            if (this.chosenPage != this.pageCount.length) {
                this.chosenPage++;
            }
        },
        prevPage() {
            if (this.chosenPage > 1) {
                this.chosenPage--;
            }
        },
        currentPage(number) {
            this.chosenPage = number
        }

    },
    computed: {
        pageCount() {
            let pagesLength = this.list.length
            let pagesSize = this.size
            let numberOfPages = Math.ceil(pagesLength / pagesSize)
            let pages = []
            for (let i = 1; i <= numberOfPages; i++) {
                pages.push(i)
            }
            return pages
        },
        renderData() {
            let start = this.chosenPage * this.size - this.size
            if (this.chosenPage == 1) {
                start = this.chosenPage - 1
            }
            let end = start + this.size
            return this.list.slice(start, end)
        }
    }
}
</script>

<style scoped>
.payment-block {
    display: flex;
    justify-content: space-between;    
    padding-left: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.103);
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
    cursor: pointer;

}
.paginationEl:hover{
    color: rgb(13, 146, 207);
}
.fas{
    padding-top: 2px;
}
</style>
