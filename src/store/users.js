const state = {
  users: [],
};
const getters = {
  getUsers: (state) => {
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
};
const actions = {
  getUsers({ commit }) {
    fetch(
      "https://raw.githubusercontent.com/Anna-Naily/json/main/usersData.json"
    )
      .then((response) => response.json())
      .then((res) => {
        commit("setUsers", res);
      });
  },
  setNewUser({ commit }, user) {
    commit("addNewUser", user);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
