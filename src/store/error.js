const getters = {
  isError: state => state.error !== null,
};

const actions = {
  clearError({ commit }) {
    commit('CLEAR_ERROR');
  },
  setError({ commit }, err) {
    commit('ERROR', err);
  },
};

const mutations = {
  ERROR(state, err) {
    if (typeof err === 'object' && err !== null) {
      if (err.error && err.error.message) {
        state.error = `${err.msg} ${err.error.message}`;
      } else if (err.msg) {
        state.error = err.msg;
      } else {
        state.error = 'Error';
      }
    } else {
      state.error = err;
    }
  },
  CLEAR_ERROR(state) {
    state.error = null;
  },
};

const state = {
  error: null,
};

const error = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default error;
