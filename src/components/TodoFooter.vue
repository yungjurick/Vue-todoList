<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="removeAllItems">clear all</span>
  </div>
</template>

<script>
// import { eventBus } from "../utils/eventBus.js";

export default {
  methods: {
    removeAllItems() {
      this.$store.commit('clearAllTodoItems');
    }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
