/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import router from '../router';
import { BASE_API_URL } from './config';

const GET_USER_URL = `${BASE_API_URL}v4/users/me`;

function processData(data) {
  return data;
}

const state = {
  user: null,
};

const getters = {
  user: state => state.user,
  isAdmin: (state) => {
    if (state.user) {
      return state.user.isAdmin;
    }
    return false;
  },
  displayName: (state) => {
    if (state.user) {
      return state.user.displayName;
    }
    return '';
  },
};

const actions = {
  selectCase(context, id) {
    context.commit('selectCase', id);
  },
  loadUser({ commit, dispatch, rootGetters }) {
    axios
      .get(GET_USER_URL, {
        headers: {
          Authorization: `JWT ${rootGetters['jwt/JWTtoken']}`,
          accept: 'application/json',
        },
      })
      .then(response => response.data)
      .then((data) => {
        data = processData(data);
        commit('SET_USER', data);
        const rt = router();
        console.log('router', rt, this);
        // if (router.currentRoute.name === 'auth') {
        this.$router.push('/ems');
        // }
      })
      .catch((error) => {
        const message = 'Get user error: ';
        console.log(message, error);
        dispatch(
          'error/setError',
          { msg: message, error },
          { root: true },
        );
      });
  },
};

const mutations = {
  SET_USER(state, data) {
    console.log('SET_USER', data);
    state.user = data;
  },
};

const user = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default user;
