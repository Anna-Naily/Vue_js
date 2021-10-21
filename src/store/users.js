const state = {
  users: [],
  updateFlag: false,
};
const getters = {
  getUsers: state => {
    return state.users;
  },
};
const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  addNewUser(state, user) {
    state.users.push(user);
  },
  deleteUser(state, user) {
    for (let i = 0; i < state.users.length; i++) {
      if (state.users[i].id === user) state.users.splice(i, 1);
    }
  },
  changeUser(state, obj) {
    for (let i = 0; i < state.users.length; i++) {
      if (state.users[i].id === obj.id) {
        state.users[i].category = obj.category;
        state.users[i].value = obj.value;
      }
    }
  },
  changeFlag(state) {
    state.updateFlag = !state.updateFlag;
  },
};
const actions = {
  getUsers({ commit }) {
    fetch(
      "https://raw.githubusercontent.com/Anna-Naily/json/main/usersData.json"
    )
      .then(response => response.json())
      .then(res => {
        commit("setUsers", res);
      });
  },
  setNewUser({ commit }, user) {
    commit("addNewUser", user);
  },
  deleteUser({ commit }, user) {
    commit("deleteUser", user);
  },
  changeUser({ commit }, user) {
    commit("changeUser", user);
  },
  changeFlag({ commit }) {
    commit("changeFlag");
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
