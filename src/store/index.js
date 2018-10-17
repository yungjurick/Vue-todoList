import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        var item = localStorage.key(i);
        arr.push(item);
        // this.todoItems.push(item);
      }
    }

    return arr;
  }
};

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch() || []
  },
  mutations: {
    addTodoItem(state, value) {
      localStorage.setItem(value, value);
      state.todoItems.push(value);
    },
    // 포장한 객체를 아예 받을 때 풀어서 쓰는 문법 스타일!! **
    removeTodoItem(state, { todoItem, index }) {
      localStorage.removeItem(todoItem);
      state.todoItems.splice(index, 1);
    },
    clearAllTodoItems(state) {
      localStorage.clear(); 
      state.todoItems = [];
    }
  }
});
