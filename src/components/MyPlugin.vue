<template>
<div>
        <div class="formWindow">
            <div @click="$keks.toShowEdition()" class="formWindowEl">
                <i class="fas fa-pencil-alt window-icon"></i>
                <span class="window-span">
                    <p class="window-text">Редактировать</p>
                </span>
            </div>
            <transition name="fade"><div v-if="getShow" class="editionEl">
                <Category @setCategory="setCategory" />
                <input type="text" placeholder="Payment value" class="inputFormWindow" v-model="value" />
                <button @click="$keks.toApplyEdition()" class="save">Применить</button>
            </div></transition>
            <div @click="$keks.toDeleteUser()" class="formWindowEl">
                <i class="fas fa-trash-alt window-icon"></i>
                <span class="window-span">
                    <p class="window-text">Удалить</p>
                </span>
            </div>
        </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import Category from "./CategoryComp.vue"
export default {
    name: "MyPlugin",
    props: {
        id: {
            type: Number,
        }
    },
    components: {
        Category
    },
    data() {
        return {
            show: false,
            value: "",
            category: ""
        }
    },
    methods: {
        toShow() {
            this.show = !this.show;
        },
        toApply() {
            this.toShow()
            let obj = {
                id: this.id,
                category: this.category,
                value: this.value,
            };
            this.changeUser(obj)

        },
        toDelete() {
            this.deleteUser(this.id)
        },
        setCategory(data) {
            this.category = data
        },

        ...mapActions("users", ["deleteUser"]),
        ...mapActions("users", ["changeUser"])
    },
    mounted() {
        this.$keks.EventBus.$on("toShowEdition", this.toShow)
        this.$keks.EventBus.$on("toApplyEdition", this.toApply)
        this.$keks.EventBus.$on("toDeleteUser", this.toDelete)
    },
    computed: {
        getShow() {
            return this.show
        }
    },

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.formWindow {
    display: block;
    background-color: white;
    flex-direction: column;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.068);
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    position: absolute;

}

.window-icon {
    color: rgba(128, 128, 128, 0.37);

}

.window-span {
    margin-left: 10px;
    display: block;

}
.v-application p {
    margin:0px;
     padding: 10px 10px;

}
.formWindowEl {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 3px 10px;
    transition: 0.3s;
}

.editionEl {
    display: flex;
    flex-direction: column;
    margin: 3px 2px 3px 10px
}

.inputFormWindow {
    margin-top: 10px;
    text-align: left;
    padding: 10px;
    border: 1px solid rgb(216, 213, 213);
    border-radius: 5px;
    font-size: 14px;
    width: 180px;
}

.save {
    width: 100px;
    margin-top: 10px;

    padding: 10px;
    border: 1px solid rgb(216, 213, 213);
    border-radius: 5px;
    font-size: 14px;
    border: none;
    color: white;
    background-color: rgb(73, 206, 73);
    cursor: pointer;
    transition: 0.2s;
}

.save:hover {
    background-color: rgba(73, 206, 73, 0.616);
    ;
}

.formWindowEl:hover {
    background-color: rgb(233, 230, 230);

}

.window-text {
    font-size: 12px;
}
</style>
